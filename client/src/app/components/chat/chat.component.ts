import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { SearchService } from 'src/app/services/search.service';
import { ChatService } from 'src/app/services/chat.service';
import { SessionService } from 'src/app/services/session-service.service';
import { SidebarComponent } from 'src/app/components/shared/sidebar/sidebar.component';

@Component({
  providers: [SidebarComponent],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer') private messagesContainer: ElementRef;
  forma: FormGroup;

  private chatType: string;

  previousLoaded = false;
  userInfo: any;

  currentUser: any;

  readonly CHAT_TYPES = {
    USER: 'user',
    ROOM: 'room'
  };

  chatTitle: string = "";

  scrollDownChatContainer() {
    this.messagesContainer.nativeElement.scrollTo(0, this.messagesContainer.nativeElement.scrollHeight + 1000);
  }
  mockup_user: any = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    status: true
  }


  mensajes = []
  friendId: any;
  userId: any;


  messageReceived: Function;
  previousMessages: Function;
  constructor(
    private router: ActivatedRoute,
    private searchService: SearchService,
    private chatService: ChatService,
    private routerer: Router,
    private sessionService: SessionService,
    private sidebarComponent: SidebarComponent) {
    this.messageReceived = (msg) => {
      if (this.previousLoaded) {
        this.mensajes.push(msg);
      }
    };
    this.previousMessages = (chat) => {
      if (chat.messages)
        this.mensajes = chat.messages;
      console.log(this.mensajes);
      this.previousLoaded = true;
    };

  }

  ngOnInit() {
    this.mensajes = [];
    this.userId = this.sessionService.getCookieUserId();
    console.log(this.userId);
    this.forma = new FormGroup({
      'mensaje': new FormControl()
    });



    this.router.params.subscribe(map => {
      if (map.type != this.CHAT_TYPES.USER && map.type != this.CHAT_TYPES.ROOM) {
        this.routerer.navigate(['/home/connect']);
        return;
      }
      this.chatType = map.type;
      
      this.chatService.getConnection().removeEventListener('message received', this.messageReceived);
      if (map.type == this.CHAT_TYPES.USER) {
        this.friendId = map.id;
        this.searchService.getUserInfoById(map.id).subscribe(userInfo => {
          this.userInfo = userInfo;
          this.chatTitle = userInfo['name'];

          this.sessionService.getUserInfo().subscribe(user => {
            //BEGIN CHAT
            var chatconfig = {
              type: map.type
            };

            chatconfig['ops'] = {
              emisor: user['_id'],
              receptor: map.id,
              receptorName: this.userInfo.name
            };

            if (user['state'] == 'ONLINE') {
              this.chatService.getConnection().on('previous messages', this.previousMessages);
              this.chatService.getConnection().on('message received', this.messageReceived);

              this.chatService.beginChat(chatconfig);
            }
          });
        });
      } else if (map.type == this.CHAT_TYPES.ROOM) {
        this.sessionService.getUserInfo().subscribe(user => {
          this.searchService.getRoomById(map.id).subscribe(room => {
            this.chatTitle = room['name'];
            console.log("ROOOM", room);
            this.chatService.beginChat({
              type: map.type,
              ops: {
                chatid: room['chatid'],
                emisor: user['_id']
              }
            });
            this.chatService.getConnection().on('previous messages', this.previousMessages);
            this.chatService.getConnection().on('message received', this.messageReceived);
          });
        });
      }
    });
  }


  enviar() {
    if (this.forma.controls.mensaje.value && this.forma.controls.mensaje.value.trim() != "") {
      this.chatService.sendMessage(this.forma.controls.mensaje.value);
      this.mensajes.push({
        text: this.forma.controls.mensaje.value,
        emisor: this.userId
      });
      this.forma.reset();
    }
  }
}
