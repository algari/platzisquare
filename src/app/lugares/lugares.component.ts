import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations:[
    trigger('contenedorAnimable', [
      state('inicial', style({
          opacity: 0
      })),
      state('final', style({
          opacity: 1
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),
  ])
  ]
})
export class LugaresComponent implements OnInit {

  title = 'PlatziSquare';

  state = 'final';

  animar(){
    this.state = (this.state == 'final') ? 'inicial' : 'final'
  }

  //Home
  lat: number = 4.5486339;
  lng: number = -75.6745766;

  lugares = [];
  constructor(private lugaresS:LugaresService) {
    //this.lugares =  lugaresS.getLugares();
    this.lugaresS.getLugares().subscribe(
      (data:any[]) => {
        //debugger;//Para hacer debug en el codigo
        //this.lugares = data;
        //Object to array
        this.lugares = Object.keys(data).map(function (key) { return data[key]; });
      },
      err => {
        console.error(err);
        alert(`Error al obtener los lugares ${err}`)
      },
      () => {
        console.log('Finished getAllPlaces');

      }
    )
   }

  items = null;
  ngOnInit() {
    
  }

}
