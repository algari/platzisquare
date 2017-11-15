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

const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalles/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
];
//{path:'detalles/:id/:action', component: DetalleComponent}, En caso que se quiera enviar mas de un parametro

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSsV0Cqc-XF6R57tHfjQXwtx3VCFEeJsM'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
