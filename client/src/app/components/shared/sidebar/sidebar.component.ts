import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session-service.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userInfo: any;

  friendsList = [];
  constructor(private sessionService: SessionService,
    private chatService: ChatService) { }

  ngOnInit() {
    this.sessionService.getUserInfo().subscribe(resp => {
      this.userInfo = resp;
      console.log(this.userInfo);
      this.chatService.friendsList.subscribe(friends => this.friendsList = friends);
      this.chatService.refreshFriendsList(resp['_id']);
    });
  }

}
