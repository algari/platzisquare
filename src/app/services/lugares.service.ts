import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LugaresService {

  items: any = [
    {id:1, plan: 'Gratuito', cercania: 1, distancia: 10, visible: true, nombre: 'Item 1' },
    {id:2, plan: 'Pagado', cercania: 2, distancia: 20, visible: false, nombre: 'Item 2' },
    {id:3, plan: 'Gratuito', cercania: 3, distancia: 30, visible: true, nombre: 'Item 3' },
  ]

  API_URL ='https://platzisquare-1510005249276.firebaseio.com/places.json';

  constructor(private afBD:AngularFireDatabase,
              private http: Http      
  ) { }

  public getLugares():Observable<Array<any>>{
    //return this.afBD.list('places/').valueChanges();
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.API_URL, options).map(response => response.json());
    
  }

  public getLugar(id){
    //return this.afBD.object(`places/${id}`).valueChanges();
    console.log(id);
    
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.API_URL+"/"+id, options).map(response => response.json());
  }

  public buscarLugar(id) {
    return this.items.filter((lugar) => {
      return lugar.id == id
    })[0] || null;
  }

  public obternerGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public sevePlace(place){
    //return this.afBD.database.ref(`places/${place.id}`).set(place);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(place);

    return this.http.post(this.API_URL,body, options).map(response => response.json());
  }

  public editPlace(place){
    this.afBD.database.ref(`places/${place.id}`).set(place);
  }
}
