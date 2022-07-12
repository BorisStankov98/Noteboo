import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
   private formBuilder:FormBuilder
  ) { }
  editForm = this.formBuilder.group({
    title:this.data.title,
    body:this.data.body
  })

  ngOnInit(): void {
    console.log(this.data)
  }

}
