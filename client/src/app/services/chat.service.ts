import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { SearchService } from 'src/app/services/search.service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/services/session-service.service'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly PORT = 3000;
  readonly DOMAIN = 'http://localhost:';

  private socket: SocketIOClient.Socket;

  constructor(private searchService: SearchService,
    private httpService: HttpClient,
    private sessionService: SessionService) {
    this.socket = io('http://localhost:3000');
  }

  initConnection(currentUser) {
    if(currentUser.state == 'ONLINE')
      this.socket.emit('start connection', currentUser);
  }

  closeConnection() {
    this.socket.close();
  }

  beginChat(chatconfig) {
    this.socket.emit('chat started', chatconfig);
  }

  clearListeners() {
    //this.socket.removeAllListeners();
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

  joinRoom(userid, roomid) {
    let data = {
      userid: userid,
      roomid: roomid
    };

    return this.httpService.post(this.DOMAIN + this.PORT + '/joinRoom', data, {withCredentials:true});
  }

}
