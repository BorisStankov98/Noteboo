import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private authService : AuthService
    ){}

      logInForm = this.formBuilder.group({
      email:[''],
      password:['']
    }
    )
  ngOnInit(): void {
  }
  handleLogIn(value:any){
    console.log(value)
    // this.authService.SignIn(value.email, value.password)
   }



}
