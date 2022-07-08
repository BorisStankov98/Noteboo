import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Notes } from '../../modules/notes-interface'
import { NoteComponent } from '../note/note.component';
@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  @Input()
  note:Notes | undefined
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
  }
  openDialog(){
    const dialogRef = this.dialog.open(NoteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
