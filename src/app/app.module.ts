import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyDSsV0Cqc-XF6R57tHfjQXwtx3VCFEeJsM '
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
