import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesDashboardComponent } from './notes-dashborad/notes-dashboard.component';
import { NotesComponent } from './notes/notes.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NoteComponent } from './note/note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GetNotesService } from '../services/get-notes.service'
import { AuthService } from '../services/auth-example.service';


const routes:Routes =[
    { path:'',
    children:[
      {path:'', component:NotesDashboardComponent},
      {path:'1', component:NoteComponent }
    ]
    }
]

@NgModule({
  declarations: [
    NotesDashboardComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild(routes),

  ],
  providers: [GetNotesService,AuthService],
  exports:[]
})
export class NotesModule { }
