import { Injectable } from '@angular/core';
import { collection, getDocs, Firestore, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notes } from '../modules/notes-interface';

@Injectable({
  providedIn: 'root',
})
export class GetNotesService {
  constructor(public firestore: Firestore) {}
  data: any[] = [];

  getData(): Promise<{ id: string }[]> {
    return new Promise((resolve) => {
      const dbInstance = collection(this.firestore, 'Boris.Notes');
      getDocs(dbInstance).then((response) => {
        console.log(response);
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
}
