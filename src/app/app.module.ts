import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import {Routes, RouterModule} from "@angular/router";
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NewPlaceComponent } from './new-place/new-place.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDwo0Es0wcDeQ9693mKss5IofGG60OlnK0",
  authDomain: "platzisquare-1510005249276.firebaseapp.com",
  databaseURL: "https://platzisquare-1510005249276.firebaseio.com",
  projectId: "platzisquare-1510005249276",
  storageBucket: "platzisquare-1510005249276.appspot.com",
  messagingSenderId: "653552006770"

};


const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalles/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear', component: NewPlaceComponent},
];
//{path:'detalles/:id/:action', component: DetalleComponent}, En caso que se quiera enviar mas de un parametro

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
    NewPlaceComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSsV0Cqc-XF6R57tHfjQXwtx3VCFEeJsM'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
