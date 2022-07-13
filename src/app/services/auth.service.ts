import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn=this.loggedIn()
  /**
   * Saves the data of the current user
   */
  currentUser(user: any) {
    localStorage.setItem('userUid', user);
  }

  /**
   * Saves the auth token
   */
  saveAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Saves the users Email
   */
  saveUserEmail(userEmail:string){
    localStorage.setItem('email', userEmail)
  }

  /**
   * Checks if the user is loged in used for authGuards
   */
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
