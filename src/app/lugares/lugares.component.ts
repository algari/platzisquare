import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

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

  constructor(lugaresS:LugaresService) {
    this.items = lugaresS.getLugares();
   }

  items = null;
  ngOnInit() {
    
  }

}
