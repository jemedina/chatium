import { Component, OnInit, NgZone } from '@angular/core';
import { SessionService } from 'src/app/services/session-service.service';
import { ChatService } from 'src/app/services/chat.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userInfo: any;

  chatList = [];
  constructor(private sessionService: SessionService,
    private chatService: ChatService,
    private searchService: SearchService,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.sessionService.getUserInfo().subscribe(resp => {
      this.userInfo = resp;
      this.chatService.initConnection(this.userInfo);
      this.refreshFriendsList();

      this.chatService.getConnection().on('new chat created', _ => {
        console.log('New user has started a chat with you or you has began a new chat', _);
        this.refreshFriendsList();
      });
    });
  }

  refreshFriendsList() {
    this.ngZone.run(() => {
      this.chatList = [];
      this.sessionService.getUserInfo().subscribe(user => {
        if (user && user.hasOwnProperty('chats')) {
          user['chats'].forEach(chat => {
            if (chat && chat.type == 'room') {
              this.searchService.getRoomById(chat.chatid).subscribe(room => {
                this.chatList.push({
                  isRoom: true,
                  name: room['name'],
                  userid: room['_id']
                });
              });
            } else {
              this.searchService.getUserInfoById(chat.receptor).subscribe(receptorUser => {
                this.chatList.push({
                  isRoom: false,
                  userid: receptorUser['_id'],
                  name: receptorUser['name']
                });
              });
            }
          });
        }
      });
    });

  }

}
