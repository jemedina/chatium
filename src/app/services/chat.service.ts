import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { SearchService } from 'src/app/services/search.service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/services/session-service.service'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly PORT = '';
  readonly DOMAIN = 'https://chatium.herokuapp.com';

  private socket: SocketIOClient.Socket;

  constructor(private searchService: SearchService,
    private httpService: HttpClient,
    private sessionService: SessionService) {
    this.socket = io('https://chatium.herokuapp.com');
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
    this.socket.removeAllListeners();
  }

  createRoom(roomDetails) {
    this.socket.emit('create room', roomDetails, this.sessionService.getCookieUserId());
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
