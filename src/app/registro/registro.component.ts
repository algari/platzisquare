import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro:any={};
  constructor(private auth:AuthService) {
    
   }

  ngOnInit() {
  }

  registrar(){
    this.auth.registro(this.registro.email,this.registro.password);
  }

}
