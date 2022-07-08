import { Component, OnInit } from '@angular/core';
import { GetNotesService } from 'src/app/services/get-notes.service';
import { Notes } from '../../modules/notes-interface'
@Component({
  selector: 'app-notes',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes!:Notes[]
  test:any
  constructor(
    public getNotes:GetNotesService
    ) { 
    }
    
    ngOnInit(){
    console.log(this.getNotes.data)
    this.getNotes.getData().then((data: {id: string}[]) => {
      this.test=data;
      console.log({test:this.test});
    })

  }

}
