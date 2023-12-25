import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { User } from '../class/user';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  form: FormGroup;
  isMatching:boolean = false;

  constructor(private router: Router, private formBuilder:FormBuilder, private http:HttpClient, private authService:AuthService){
    this.form = formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["", [Validators.required]],
      name:["",[Validators.maxLength(20)]],
      address:[""],
      mobile:["", [Validators.maxLength(10)]],
      pincode:[""],
      confirmPassword:["",[Validators.required]],
    });
  }

  passwordKeyUp(event: any){
    if(this.form.value.password == event.target.value){
      this.isMatching = true;
    }
  }

  onSubmit() {
    const auth = getAuth();
    let user:User = new User();
    user.name=this.form.value.name;
    user.email=this.form.value.email;
    user.address=this.form.value.address;
    user.mobile=this.form.value.mobile;
    user.pincode=this.form.value.pincode;
    user.password=this.form.value.password;

    this.http.post<User>('http://springboot-service:8080/register', user).subscribe(response => {
      sessionStorage.setItem("currentUser", response.toString());
    });

    createUserWithEmailAndPassword(auth, this.form.value.email, this.form.value.password)
    .then((userCredential) => {
      this.authService.signin(this.form.value.email, this.form.value.password, 
        () => {
          this.router.navigateByUrl('/home');
          alert('user created successfully and logged in')
        },
        () => {
          alert("invalid username/password")
        });
    })
    .catch((error) => {
      
    });
  }

  loginAgain(){
    this.router.navigateByUrl('/');
  }
}

