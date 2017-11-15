import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

  place :any = null;
  constructor(private lugaresS:LugaresService) { }

  ngOnInit() {
    this.place ={};
  }

  savePlace(){
    this.place.id = Date.now();
    this.lugaresS.sevePlace(this.place);
    alert('Guardado con exito');
    this.place={};
  }

}
