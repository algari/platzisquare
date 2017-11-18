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

import {HttpModule} from '@angular/http';
import { LinkifystrPipe } from './pipes/linkifyjs.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from './services/auth.service';
import { MyGuardService } from './services/my-guard.service';

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
  {path:'crear/:id', component: NewPlaceComponent,canActivate:[MyGuardService]},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
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
    NewPlaceComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyBJAMjtE4S9udh93olvFaWxQeQkc_uphS8 '
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LugaresService,AuthService,MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
