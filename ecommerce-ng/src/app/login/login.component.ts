import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';
import { AppService } from '../core/service/app.service';
import { User } from '../class/user';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  authService: AuthService;
  message:any;
  visible:boolean = true;
  constructor(private router: Router, private formBuilder:FormBuilder, authService:AuthService,
    private appService:AppService,  private http:HttpClient) { 
    this.form = formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["", [Validators.required]]
    });
    this.authService = authService;
    this.appService.getMessage.subscribe(msg => this.message = msg)
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email","ramkumardevadoss@gmail.com");
    this.http.get<User>("http://springboot-service:8080/user",{params:queryParams}).subscribe(response => {
      sessionStorage.setItem("currentUser", JSON.stringify(response));
    });
  }

  showRegistrationForm(){
    this.router.navigateByUrl('/register');
  }

  logIn(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",this.form.value.email);
    this.http.get<User>("http://springboot-service:8080/user",{params:queryParams}).subscribe(response => {
      sessionStorage.setItem("currentUser", JSON.stringify(response));
    });
    this.http.get("http://springboot-service:8080/login").subscribe(response => {
      console.log(response);
    });

    this.authService.signin(this.form.value.email, this.form.value.password, 
      () => {
        this.router.navigateByUrl('/home');
        this.visible = false;
        this.appService.setMessage(false);
      },
      () => {
        alert("invalid username/password")
      });
  }
}