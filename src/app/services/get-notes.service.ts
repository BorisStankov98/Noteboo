import { Injectable } from '@angular/core';

import {
  collection,
  getDocs,
  Firestore,
  QueryDocumentSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class GetNotesService {
  data: any[] = [];
  note: any;

  constructor(
    public firestore: Firestore,
    private router :Router,
    private route : ActivatedRoute,
    ) {
  }
  /**
   * Resets the component so the UI can update
   */
  resetPage(){
    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute= ()=> false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./notes'],{
        relativeTo:this.route
      })
    }, 200)
  }

  /**
   * Gets the user saved in local storage
   */
  getUserId(): string {
    const user_id = localStorage.getItem('userUid');
    if (!user_id) throw new Error("Missing user id in local storage");

    return user_id;
  }
  /**
   * Creates a query with the user UID to fetch the correct data
   */
  getData(): Promise<{ id: string }[]> {
    return new Promise((resolve) => {
      const dbInstance = collection(this.firestore, this.getUserId());
      getDocs(dbInstance).then((response) => {
        this.data = response.docs.map((item: QueryDocumentSnapshot<any>) => {
          return {
            id: item.id,
            title: item.get('title'),
            body: item.get('body'),
          };
        });
        resolve(this.data);
      });
    });
  }

  getNote(noteid: string): Promise<any> {
    return new Promise((resolve) => {
      const dbInstance = collection(this.firestore, this.getUserId());
      getDocs(dbInstance).then((response) => {
        this.note = response.docs.find((item: QueryDocumentSnapshot<any>) => {
          return item.id === noteid
        });
        resolve(this.note);
      });
    });
  }
/**
 * Initialises a db instance based on the users UID
 */
  initDBinstance(){
    const dbInstance = collection(this.firestore, this.getUserId());
    setDoc(doc(dbInstance),{
      title:'Example title',
      body:"Example text"
    })
  }
  /**
   * Create a new note in the users Document
   */
  createNote(title:string,body:string){
    const dbInstance = collection(this.firestore, this.getUserId());
    setDoc(doc(dbInstance),{
      title:title,
      body:body
    })
  }
    /**
     *
     * Deletes a document form the DB based on the document passed
     */
  deleteNote(document:string){
    const dbInstance = collection(this.firestore, this.getUserId());
    deleteDoc(doc(dbInstance,document))
}
  editNote(note:{title:string,body:string},id:string){
    const dbInstance = collection(this.firestore, this.getUserId());
    setDoc(doc(dbInstance,id),
    {
      title:note.title,
      body:note.body
    }
    )
  }
}
