import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as io from 'socket.io-client';
import { SearchService } from 'src/app/services/search.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly PORT = 3000;
  readonly DOMAIN = 'http://localhost:';

  private socket: SocketIOClient.Socket;
  private friends: any = [];


  private friendsSource = new BehaviorSubject(this.friends);
  friendsList = this.friendsSource.asObservable();

  constructor(private searchService: SearchService,
    private httpService: HttpClient) {
    this.socket = io('http://localhost:3000');
  }

  closeConnection() {
    this.socket.close();
  }

  beginChat(chatconfig) {
    this.socket.removeAllListeners();
    this.socket.emit('chat started', chatconfig);
    this.socket.on('chat generated', _ => {
      if(chatconfig && chatconfig.ops && chatconfig.ops.emisor)
        this.refreshFriendsList(chatconfig.ops.emisor);
    });

  }

  createRoom(roomDetails) {
    return this.httpService.post(this.DOMAIN + this.PORT + "/createRoom", roomDetails, { withCredentials: true });
  }

  closeChat() {
    this.socket.emit('close chat');
  }

  sendMessage(message) {
    this.socket.emit('send message', message);
  }

  getConnection() {
    return this.socket;
  }

  refreshFriendsList(id) {
    console.log("refreshing friends list");
    var newFriends = [];
    this.searchService.getUserInfoById(id).subscribe(user => {
      if (user && user.hasOwnProperty('chats')) {
        user['chats'].forEach(chat => {
          if(chat && chat.type == 'room') {
            console.log("ROOM ", chat);
            this.searchService.getRoomById(chat.chatid).subscribe(room => {
              newFriends.push({
                isRoom: true,
                name: room['name'],
                userid: room['_id']
              });
              this.friends = newFriends;
              this.friendsSource.next(this.friends);
            });
          } else {
            this.searchService.getUserInfoById(chat.receptor).subscribe(receptorUser => {
              newFriends.push({
                isRoom: false,
                userid: receptorUser['_id'],
                name: receptorUser['name']
              });
              this.friends = newFriends;
              this.friendsSource.next(this.friends);
            });
          }
        });
      }
    });
  }
}
