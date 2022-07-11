import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user:{} | null = null

  constructor() {}
  currentUser(user:{}){
    this.user=user
    console.log(this.user)
    return this.user
  }
  saveAuthToken(token:string){
    localStorage.setItem("token", token)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
