import { Component } from '@angular/core';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "Welcome to " + AppSettings.APP_TITLE + "!";
  googleClientId = AppSettings.GOOGLE_CLIENT_ID;

  onNotify(message:string):void {
    alert(message);
    console.log("dads");
  }

}
