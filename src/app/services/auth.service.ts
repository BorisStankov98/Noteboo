import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  /**
   * Saves the data of the current user
   */
  currentUser(user: any) {
    localStorage.setItem('userUid', user);
  }

  /**
   * saves the auth token
   */
  saveAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Checks if the user is loged in used for authGuards
   */
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
