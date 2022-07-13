import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userEmail?:string|null
  isLoggedIn:boolean = false
  constructor(
    private router : Router,
    private auth: AuthService,
  ){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.isLoggedIn=this.auth.loggedIn()
        this.userEmail = localStorage.getItem('email')
      }
    })
  }

  signOut(){
    localStorage.clear()
    this.isLoggedIn=false
  }
  ngOnInit(): void {
    this.isLoggedIn=this.auth.loggedIn()
  }

}
