import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  
  constructor() {
    
   }
   getData(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, "email", "password")
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
        console.log(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
   }
}
