import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Place } from '../model/place.model';

@Injectable()
export class PlaceService {

    // private dbPath: string = '/places';
  
    // place: any = null;
    // places: any[] = null;
  
    // constructor(private db: AngularFireDatabase) {}
  
    // getplace(key: string): any {
    //   this.place = this.db.object(`${this.dbPath}/${key}`);
    //   return this.place;
    // }
  
    // createplace(place: Place): void {
    //   this.places.push(place).catch(error => this.handleError(error));
    // }
  
    // updateplace(key: string, value: any): void {
    //   this.places.update(key, value).catch(error => this.handleError(error));
    // }
  
    // deleteplace(key: string): void {
    //   this.places.remove(key).catch(error => this.handleError(error));
    // }
  
    // getplacesList(query = {}): FirebaseListObservable<Place[]> {
    //   this.places = this.db.list(this.dbPath, {
    //     query: query
    //   });
    //   return this.places;
    // }
  
    // deleteAll(): void {
    //   this.places.remove().catch(error => this.handleError(error));
    // }
  
    // private handleError(error) {
    //   console.log(error);
    // }

}
