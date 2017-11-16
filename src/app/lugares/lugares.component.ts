import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

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
