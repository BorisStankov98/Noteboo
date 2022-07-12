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
import { AuthGuard } from '../auth.guard';
import { AddNoteComponent } from './add-note/add-note.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes =[
      {path:'', component:NotesDashboardComponent,
    canActivate: [AuthGuard]
  }
    ]

@NgModule({
  declarations: [
    NotesDashboardComponent,
    NotesComponent,
    NoteComponent,
    AddNoteComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ],
  providers: [GetNotesService,AuthService,AuthGuard],
  exports:[]
})
export class NotesModule { }
