import { Component, OnInit } from '@angular/core';
import { GetNotesService } from 'src/app/services/get-notes.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-note-view',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getNotes:GetNotesService,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    // this.getNotes.getNote(this.note!.id).then((data)=>{
    //   console.log(data)
    // })
  }

}
