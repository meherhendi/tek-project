import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authenticationService: AuthService) {}
  title = 'tekapp';
  clicked : boolean = false ;

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  userPictureOnly='';
  user = {name : 'test-user' , picture : 'test'} ;
  

  public onFloatClick () {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

  
}
