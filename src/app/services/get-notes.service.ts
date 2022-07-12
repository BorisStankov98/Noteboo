import { Injectable } from '@angular/core';

import {
  collection,
  getDocs,
  Firestore,
  QueryDocumentSnapshot,
  doc,
  query,
  where,
  getDoc,
  DocumentReference,
  DocumentData,
  setDoc,
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class GetNotesService {
  data: any[] = [];
  note: any;

  constructor(public firestore: Firestore) {
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

  getNote(id: string): Promise<{ id: string }[]> {
    return new Promise((resolve) => {
      const dbInstance = collection(this.firestore, 'Boris.Notes');
      getDocs(dbInstance).then((response) => {
        this.note = response.docs.find((item: QueryDocumentSnapshot<any>) => {
          return item.id === 'eJFrlPkyL8mkhb2ZztVU';
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
}
