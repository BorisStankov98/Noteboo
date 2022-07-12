import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userEmail?:string|null
  constructor(){}

  signOut(){
    localStorage.clear()
  }
  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email')
  }
}
