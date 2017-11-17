import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class MyGuardService implements CanActivate{
  
  canActivate(){
    return this.loggedin;
  }

  loggedin = false;
  constructor(private auth:AuthService) {
    this.auth.isLogged().subscribe(result=>{
     if (result && result.uid) {
        this.loggedin = true;
      }else{
        this.loggedin = false;
      }
    },error=>{
      this.loggedin = false;
    })
  }

}
