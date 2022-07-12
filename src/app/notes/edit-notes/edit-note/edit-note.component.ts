import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetNotesService } from 'src/app/services/get-notes.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeNote : GetNotesService,
    private formBuilder:FormBuilder
  ) { }
  editForm = this.formBuilder.group({
    title:[this.data.note.title],
    body:[this.data.note.body]
   })

  ngOnInit(): void {
  }
  handleChange(formValue:any){
    this.changeNote.editNote(formValue,this.data.note.id)
  }
}
