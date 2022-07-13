import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private auth:Auth,
    private authService:AuthService
    ){}

      logInForm = this.formBuilder.group({
      email:[''],
      password:['']
    }
    )
  ngOnInit(): void {

  }
  handleLogIn(value:any){
      signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response:any)=>{
        this.authService.saveAuthToken(response._tokenResponse.idToken)
        this.authService.currentUser(response.user.uid)
        this.authService.saveUserEmail(response.user.email)
        this.router.navigate(['notes']);
      })
      .catch((error)=>{
        alert(error)})

   }



}
