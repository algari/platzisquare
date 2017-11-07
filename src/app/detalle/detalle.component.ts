import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private roue:ActivatedRoute) 
  { 
    console.log(this.roue.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
