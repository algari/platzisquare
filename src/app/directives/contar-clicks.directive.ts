import { Directive, HostListener, HostBinding } from '@angular/core';

//li[appContarClicks] li referencia el componente HTML a modificar <li></li>
@Directive({
  selector: 'li[appContarClicks]'
})
export class ContarClicksDirective {
  clickN: number = 0;

  constructor() { }
  
  //Edita el componente HTML
  @HostBinding('style.opacity')
  opacity = .1;

  //Eschucha los eventos de DOM
  @HostListener('click',['$event.target']) 
  onClick(btn){
    console.log('a',btn,"Numero de clicks: "+this.clickN++);
    this.opacity += .1;
  }

}
