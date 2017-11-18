import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs'
import 'rxjs/Rx'
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

  place :any = null;
  id:any = null;

  private searchField: FormControl;
  results$:Observable<any>;

  constructor(private lugaresS:LugaresService,
    private route: ActivatedRoute,
  private http:Http) {
    this.id = this.route.snapshot.params['id'];
    if(this.id !='new'){
      this.lugaresS.getLugar(this.id).subscribe(data =>{
        //debugger;//Para hacer debug en el codigo
         this.place=data;
       },
       err => {
         console.error(err);
       },
       () => {
         console.log('Finished getLugar');
     })
    }
    const URL = 'https://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(query => this.http.get(`${URL}?address=${query}`))
      .map(response => response.json())
      .map(response => response.results);
   }

  ngOnInit() {
    this.place ={};
  }

  savePlace(){
    var dir = this.place.calle+","+this.place.cuidad+","+this.place.pais;
    this.lugaresS.obternerGeoData(dir).subscribe(data =>{
       //debugger;//Para hacer debug en el codigo
        this.place.lat =data.json().results[0].geometry.location.lat;
        this.place.lng =data.json().results[0].geometry.location.lng;
        
        if(this.id !='new'){
          this.lugaresS.editPlace(this.place);
          alert('Editado con exito');
        }else{
          this.place.id = Date.now();
          
          this.lugaresS.sevePlace(this.place).subscribe(
            (game: any) => {
              alert('Guardado con exito');
              this.place={};
            },
            errorResponse => {
              const errorData = errorResponse.json();
              console.error(errorData.error);
            },
            () => {
              console.log('Finished creation request');
            }
          );
        }
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Finished getAllGames');

    })
    
  }

}
