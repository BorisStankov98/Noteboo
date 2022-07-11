import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { initializeApp,provideFirebaseApp} from '@angular/fire/app';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule, Routes } from '@angular/router';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home-component/home-component.component';




const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{path:'notes',
  loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent,AuthService]
})
export class AppModule { }
