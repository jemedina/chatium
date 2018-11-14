import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as io from 'socket.io-client';
import { SearchService } from 'src/app/services/search.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly PORT = 3000;
  readonly DOMAIN = 'http://localhost:';

  private socket: SocketIOClient.Socket;
  private friends:any = [];


  private friendsSource = new BehaviorSubject(this.friends);
  friendsList = this.friendsSource.asObservable();

  constructor(private searchService: SearchService) {
    this.socket = io('http://localhost:3000');
  }

  closeConnection() {
    this.socket.close();
  }

  beginChat(chatconfig) {
    this.socket.removeAllListeners();
    this.refreshFriendsList(chatconfig.ops.emisor);
    this.socket.emit('chat started', chatconfig);
  }

  closeChat() {
    this.socket.emit('close chat');
  }

  sendMessage(message) {
    this.socket.emit('send message', message);
  }

  getConnection(){
    return this.socket;
  }

  refreshFriendsList(id) {
    console.log("refreshing friends list");
    var newFriends = [];
    this.searchService.getUserInfoById(id).subscribe(user => {
      user['chats'].forEach( chat => {
        this.searchService.getUserInfoById(chat.receptor).subscribe(receptorUser => {
          newFriends.push({
            userid: receptorUser['_id'],
            name: receptorUser['name']
          });
          this.friends = newFriends;
          this.friendsSource.next(this.friends);
        });
      });
    });
  }
}
