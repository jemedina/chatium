import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { SearchService } from 'src/app/services/search.service';
import { ChatService } from 'src/app/services/chat.service';
import { SessionService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  forma: FormGroup;
  friendId: string;

  previousLoaded = false;
  userInfo: any;

  CHAT_TYPES = {
    USER: 'user',
    ROOM: 'room'
  };

  chatType: string;

  mockup_user: any = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    status: true
  }

  mockup_mensaje: {
    texto: string,
    emisor: string,
    receptor: string,
    fecha: any
  }

  mockup_mensaje_recibido: {
    emisor: string,
    texto: string,
    fecha: any,
  }


  mensajes = []

  constructor(
    private router: ActivatedRoute,
    private searchService: SearchService,
    private chatService: ChatService,
    private routerer: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.forma = new FormGroup({
      'mensaje': new FormControl()
    })

    this.router.params.subscribe(map => {
      if (map.type == this.CHAT_TYPES.USER) {
        this.chatType = this.CHAT_TYPES.USER;
      } else if (map.type == this.CHAT_TYPES.ROOM) {
        this.chatType = this.CHAT_TYPES.ROOM
      } else {
        console.log("Navigate")
        this.routerer.navigate(['/home/connect']);
        return;
      }
      this.friendId = map.friendId;
      this.searchService.getUserInfoById(this.friendId).subscribe(userInfo => {
        this.userInfo = userInfo;

        this.sessionService.getUserInfo().subscribe(user => {
          //BEGIN CHAT
          var chatconfig = {
            type: this.chatType
          };
          if (this.chatType == this.CHAT_TYPES.USER) {
            chatconfig['ops'] = {
              emisor: user['_id'],
              receptor: this.friendId,
              receptorName: this.userInfo.name
            };
          } else {
            chatconfig['ops'] = {
              roomid: 'roomid'
            };
          }
          if (user['state'] == 'ONLINE') {
            this.chatService.beginChat(chatconfig);
            this.chatService.getConnection().on('previous messages', chat => {
              if(chat.messages)
                this.mensajes = chat.messages;
              console.log(this.mensajes);
              this.previousLoaded = true;
            });
            this.chatService.getConnection().on('message received', (msg) => {
              if (this.previousLoaded) {
                this.mensajes.push(msg);
              }
            });
          }
        });

      });
    });
  }


  enviar() {
    if (this.forma.controls.mensaje.value) {
      this.chatService.sendMessage(this.forma.controls.mensaje.value);
      this.mensajes.push({
        text: this.forma.controls.mensaje.value
      });
      /*this.mockup_mensaje = {
        texto: this.forma.controls.mensaje.value,
        emisor: "user",
        receptor: this.friendId,
        fecha: new Date()
      }
      console.log(this.mockup_mensaje);
      this.mensajes_enviados.push(this.mockup_mensaje)*/

      this.forma.reset();
    }
    /*
        this.mockup_mensaje_recibido = {
          emisor: "babo",
          texto: "Hola qlo, que anda haciendo compa :v",
          fecha: new Date(),
        }
        this.mensajes_recibidos.push(this.mockup_mensaje_recibido)*/
  }
}
