import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth"

@Component({
  selector: 'app-form-signin',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class SignInComponent implements OnInit {

    constructor(
      private auth:Auth,
      private formBuilder:FormBuilder){}
      signInForm = this.formBuilder.group({
      email:[''],
      password:['']
    }
    )

  ngOnInit(): void {
    console.log()
  }
  handleRegister(value:any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response:any)=>{
      console.log(response.user)
    })
    .catch((error)=>{
      alert(error)})
  }


}
