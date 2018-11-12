import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chatium';

  constructor(private router: Router, private sessionService: SessionService){}

  ngOnInit() {
    this.verifySession();
    this.router.events.subscribe( (val) => {
      this.verifySession();
    });
  }

  verifySession() {
    this.sessionService.getUserInfo().subscribe( (data: any) => {
      if(data && data.state === 'OFFLINE'){
        this.router.navigate(['/login']);
      } else if (data && data.state == 'ONLINE' && data.setup == true) {
        this.router.navigate(['/home']);
      } else if (data && data.state == 'ONLINE' && data.setup == false) {
        this.router.navigate(['/setup']);
      }
      console.log(data);
    });
  }
}
