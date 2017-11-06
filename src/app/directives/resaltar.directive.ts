import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {
  
  @Input('appResaltar')
  plan: string = '';


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if(this.plan == 'Pagado'){
      this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
      this.renderer.setStyle(this.elRef.nativeElement,'font-weight','bold');
    }
  }

}
