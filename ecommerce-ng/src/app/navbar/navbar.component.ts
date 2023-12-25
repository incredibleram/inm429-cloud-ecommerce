import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../core/service/app.service';
import { AuthService } from '../core/service/auth.service';
import { getAuth } from "firebase/auth";
import * as firebase from 'firebase/compat';
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isAdmin: boolean = true;
  authService: AuthService
  constructor(private router: Router, private appService:AppService,authService:AuthService, private http:HttpClient) {
    this.authService = authService;
    authService.afa.onAuthStateChanged(user => {
      this.isAdmin = JSON.parse(sessionStorage.getItem("currentUser") || '{}')['userType'] == 1;
      if(user){
        document.getElementById("logout-link")?.removeAttribute("hidden");
        document.getElementById("home-button")?.removeAttribute("hidden");
        document.getElementById("stock-link")?.removeAttribute("hidden");
        document.getElementById("orders-link")?.removeAttribute("hidden");
        document.getElementById("product-mod")?.removeAttribute("hidden");
      }else{
        document.getElementById("logout-link")?.setAttribute("hidden", "true");
        document.getElementById("home-button")?.setAttribute("hidden", "true");
        document.getElementById("stock-link")?.setAttribute("hidden", "true");
        document.getElementById("orders-link")?.setAttribute("hidden", "true");
        document.getElementById("product-mod")?.setAttribute("hidden", "true");
      }
    })
   }
  message:any = false;
  ngOnInit(): void {
    this.appService.getMessage.subscribe(msg => {
      this.message = msg
    });
    AngularFireModule.initializeApp(environment.firebaseConfig);
  }

  visible:boolean = true;
  navigateToPage(option: any) {
    if(option.target.value == 'addProduct'){
      this.router.navigateByUrl('/add-product');
    }else{
      this.router.navigateByUrl('/update-lookup-product');
    }
  }

  logout(){
    this.authService.signOut();
    this.http.get("http://springboot-service:8080/logout").subscribe();
    this.router.navigateByUrl('/');
  }
}
