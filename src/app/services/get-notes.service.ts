import { Injectable } from '@angular/core';

import { collection, getDocs, Firestore, QueryDocumentSnapshot, doc,query,where,getDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GetNotesService {
  constructor(public firestore: Firestore) {}
  data: any[] = [];
  // gets the user saved in local storage
  getUser(){
    return localStorage.getItem('userUid')
  }
  //  asigns the user from localstorage to the user variable
  user:any = this.getUser()
  //  creates a query with the user UID to fetch the correct data
  getData(): Promise<{ id: string }[]> {
    return new Promise((resolve) => {
      const dbInstance = collection(this.firestore, this.user);
      getDocs(dbInstance).then((response) => {
        this.data = response.docs.map((item: QueryDocumentSnapshot<any>) => {
          return {
            id: item.id,
            title: item.get("title"),
            body: item.get("body")
          };
        });
        resolve(this.data);
      });
    });
  }
  note:any
  getNote(id:string): Promise<{ id: string }[]> {
    return new Promise((resolve) => {
      const dbInstance = collection(this.firestore, 'Boris.Notes');
      getDocs(dbInstance).then((response) => {
        this.note = response.docs.find((item: QueryDocumentSnapshot<any>) => {
           return item.id==='eJFrlPkyL8mkhb2ZztVU'
        });
        resolve(this.note);
      });
    });
  }
}
