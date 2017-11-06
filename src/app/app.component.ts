import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';

  //Home
  lat: number = 4.5486339;
  lng: number = -75.6745766;

  items: any = [
    { plan:'Gratuito',cercania:1,distancia:10,visible: true, nombre: 'Item 1' },
    { plan:'Pagado',cercania:2,distancia:20,visible: false, nombre: 'Item 2' },
    { plan:'Gratuito',cercania:3,distancia:30,visible: true, nombre: 'Item 3' },
  ]

  constructor() {

  }
}
