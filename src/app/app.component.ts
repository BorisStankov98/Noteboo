import { Component } from '@angular/core';

//import the authentication services form firebase.
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth"

//import the write and read document services from firebase.
import { addDoc, Firestore, collection, getDocs } from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data!:any[]
  constructor(
    public auth:Auth,
    public firestore:Firestore
    
    ){
    this.getData()
  }
  // create a user
  handleRegister(value:any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response:any)=>{
      console.log(response.user)
    })
    .catch((error)=>{
      alert(error)})
  }
  //create a document
  addData(value:any){
    const dbInstance = collection(this.firestore, 'Boris.Notes')
    addDoc(dbInstance, value)
    .then(()=>{
      alert('Data sent')
    })
    .catch((err)=>{
      alert(err)
    })
  }
  //get data from the database
  getData():void{
    const dbInstance = collection(this.firestore, 'Boris.Notes');
    getDocs(dbInstance)
    .then((response)=>{
      this.data =(response.docs.map((item)=>{
        return {... item.data(), id:item.id}
      }))
    })
      
    
  }
}
