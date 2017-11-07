import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'PlatziSquare';

  //Home
  lat: number = 4.5486339;
  lng: number = -75.6745766;

  items: any = [
    { plan: 'Gratuito', cercania: 1, distancia: 10, visible: true, nombre: 'Item 1' },
    { plan: 'Pagado', cercania: 2, distancia: 20, visible: false, nombre: 'Item 2' },
    { plan: 'Gratuito', cercania: 3, distancia: 30, visible: true, nombre: 'Item 3' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
