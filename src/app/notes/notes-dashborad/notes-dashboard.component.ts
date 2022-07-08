import { Component, OnInit } from '@angular/core';
import { GetNotesService } from 'src/app/services/get-notes.service';
import { Notes } from '../../modules/notes-interface'
@Component({
  selector: 'app-notes',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes:any
  constructor(
    public getNotes:GetNotesService
    ) {
    }

    ngOnInit(){
    this.getNotes.getData().then((data: {id: string}[]) => {
      this.notes=data;
      console.log(this.notes)
    })

  }

}
