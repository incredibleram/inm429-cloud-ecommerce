import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  signin(email:string, password:string, onSuccess: any, onError: any){
    this.afa.signInWithEmailAndPassword(email, password)
    .then( result => {
        onSuccess();
        result.user?.getIdToken().then(
          idToken => {
        })
      })
      .catch(error => {
        onError();
      })
  }

  signOut(){
    this.afa.signOut().then(result => {
    }).catch(error => {
    });
  }
}
