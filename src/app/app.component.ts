import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedin = false;
  user:any=null;
  token:any;
  constructor(private auth: AuthService) {
    this.auth.isLogged().subscribe(result => {
      if (result && result.uid) {
        this.loggedin = true;
        setTimeout(() => {
          this.user = this.auth.getUser().currentUser.email;
          
         }, 500);
        console.log(this.user);
      } else {
        this.loggedin = false;
      }
    }, error => {
      this.loggedin = false;
    })
  }

  logout(){
    this.auth.logout();
  }
}
