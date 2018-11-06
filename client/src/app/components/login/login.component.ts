import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionService } from '../../services/session-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;

  constructor(private router: Router, private sessionService: SessionService) { }
    
  ngOnInit() {
  }

  doLogin() {
    console.log("doLogin clicked");
    this.sessionService.beginSession(this.username, this.password).subscribe((data:  any) => {
      if(data.status == 1){
        alert("Session started!");
      } else {
        alert("User/Pass incorrects");
      }
      console.log("Response:",data);
    });
  }

}
