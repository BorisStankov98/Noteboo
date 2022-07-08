import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}
    
      logInForm = this.formBuilder.group({
      email:[''],
      password:['']
    }
    )
    submitForm(){
      console.log(this.logInForm.value)
    }
  ngOnInit(): void {
  }




}
