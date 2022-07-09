import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/form.component';

import { FormComponent } from './components/log-in/form.component';
import { AuthService } from '../services/auth.service';


const routes:Routes =[
    { path:'login', component:FormComponent },
    { path:'signin', component: SignInComponent}
]

@NgModule({
  declarations: [
    FormComponent,SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes),

  ],
  providers: [AuthService],
  exports:[  ]
})
export class AuthModule { }
