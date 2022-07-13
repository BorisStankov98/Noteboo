import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth"
import { Router } from '@angular/router';
import { GetNotesService } from 'src/app/services/get-notes.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-signin',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class SignInComponent implements OnInit {

    constructor(
      private authService : AuthService,
      private getNote : GetNotesService,
      private router: Router,
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
      this.authService.currentUser(response.user.uid)
      this.getNote.initDBinstance()
      this.router.navigate(['auth/login']);
    })
    .catch((error)=>{
      alert(error)})
  }


}
