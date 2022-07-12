import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetNotesService } from 'src/app/services/get-notes.service';
import { Notes } from '../../modules/notes-interface'
import { EditNoteComponent } from '../edit-notes/edit-note/edit-note.component';
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
   this.getNotes.deleteNote(this.note!.id)
  }
  editNote(){
    const dialogRef = this.dialog.open(EditNoteComponent,{
      width:"80%",
      data:{
        note:this.note
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  viewNote(){
    const dialogRef = this.dialog.open(NoteComponent,{
      width:"80%",
      data:{
        note:this.note
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
