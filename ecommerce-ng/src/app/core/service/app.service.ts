import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private message = new BehaviorSubject(true);
  getMessage = this.message.asObservable();
  constructor() { }

  setMessage(message:any){
    this.message.next(message);
  }
}
