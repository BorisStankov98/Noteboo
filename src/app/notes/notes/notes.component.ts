import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { GetNotesService } from 'src/app/services/get-notes.service';
import { Notes } from '../../modules/notes-interface'
import { NoteComponent } from '../note/note.component';
@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteView!:any
  @Input()
  note:Notes | undefined

  constructor(
    public dialog: MatDialog,
    public getNotes:GetNotesService
  ) { }

  ngOnInit(): void {

  }
  deleteNote(){
    console.log(this.note?.id)
  }

  openDialog(){
     this.getNotes.getNote(this.note!.id).then((data: {id: string}[]) => {
      this.noteView=data;
      console.log(this.noteView)
    })

    const dialogRef = this.dialog.open(NoteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
