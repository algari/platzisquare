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

  lugares = null;
  constructor(private lugaresS:LugaresService) {
    //this.lugares =  lugaresS.getLugares();
    this.lugaresS.getLugares().subscribe(
      (data) => {
        //debugger;//Para hacer debug en el codigo
        this.lugares = data;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Finished getAllGames');

      }
    )
   }

  items = null;
  ngOnInit() {
    
  }

}
