import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetNotesService } from 'src/app/services/get-notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(
    private addNote: GetNotesService,
    private formBuilder:FormBuilder
  ) {}
    noteForm= this.formBuilder.group({
      title:[''],
      body:['']
    })


  ngOnInit(): void {
  }
  handleAdd(value:any){
    this.addNote.createNote(value.title, value.body)
    this.addNote.resetPage()
  }

}
