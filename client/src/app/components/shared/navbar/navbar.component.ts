import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  readonly SIGNOUT_SUCCESSFUL = 1;
  readonly SIGNOUT_FAILED = 0;
  constructor(private sessionService:SessionService, private route: Router) { }

  ngOnInit() {
  }


  signout(){
    this.sessionService.signOut().subscribe( (data: any) =>{
      console.log(data);
      if(data.state==this.SIGNOUT_SUCCESSFUL){
        this.route.navigate(['/login']);
      }
    });
  }
}
