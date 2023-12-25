import { CommonModule } from "@angular/common";
import { AppComponent } from "../app.component";
import { NgModule } from "@angular/core";
import { AuthService } from "./service/auth.service";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environments";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
  })export class CoreModule{
  }