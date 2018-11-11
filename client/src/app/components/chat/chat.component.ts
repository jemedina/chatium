import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  forma: FormGroup;
  friendId: string;

  mockup_user: any = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    status: true
  }

  mockup_mensaje: {
    texto: string,
    emisor: string,
    receptor: string
  }

 
  mensajes_enviados =[]

  constructor(private router: ActivatedRoute) {
    router.params.subscribe(map => this.friendId = map.friendId);
  }

  ngOnInit() {
    this.forma = new FormGroup({
      'mensaje': new FormControl()
    })
  }


  enviar() {
    if (this.forma.controls.mensaje.value) {
      this.mockup_mensaje = {
        texto: this.forma.controls.mensaje.value,
        emisor: "user",
        receptor: this.friendId,
      }
      this.mensajes_enviados.push(this.mockup_mensaje)
      this.forma.reset();
    }
  }
}
