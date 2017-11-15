import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {

  items: any = [
    {id:1, plan: 'Gratuito', cercania: 1, distancia: 10, visible: true, nombre: 'Item 1' },
    {id:2, plan: 'Pagado', cercania: 2, distancia: 20, visible: false, nombre: 'Item 2' },
    {id:3, plan: 'Gratuito', cercania: 3, distancia: 30, visible: true, nombre: 'Item 3' },
  ]

  constructor() { }

  public getLugares(){
    return this.items;
  }

  public buscarLugar(id) {
    return this.items.filter((lugar) => {
      return lugar.id == id
    })[0] || null;
  }
}
