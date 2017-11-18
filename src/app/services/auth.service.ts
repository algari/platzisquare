import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth,
              private router:Router) {
    this.isLogged();
  }

  public facebookLogin = () => {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
      .then((response) => {
        alert('Usuario Facebook con éxito!');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        alert('Un error ha ocurrido facebookLogin');
        console.log(error);
      })
  };

  public login = (email, password) => {
    console.log(email + " " + password);
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario Loggeado con éxito!');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
      })
  };
  public registro = (email, password) => {
    console.log(email + " " + password);

    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario Registrado con éxito!');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
      })
  };

  public isLogged() {
    return this.angularFireAuth.authState;
  };

  public logout() {
    this.angularFireAuth.auth.signOut();
    alert('Sesión Cerrada');
    this.router.navigate(['lugares']);
  }

  //in authService file 
  getToken() {
    return this.angularFireAuth.auth.currentUser.getIdToken()
      .then(token => {
        return token;
      });
  }
}
