import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user:{} | null = null
  constructor() {}
  currentUser(value:{}){
    this.user=value
    console.log(this.user)
  }
}
