import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userInfo: any;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.getUserInfo().subscribe(resp => {
      this.userInfo = resp;
      console.log(this.userInfo);
    });
  }

}
