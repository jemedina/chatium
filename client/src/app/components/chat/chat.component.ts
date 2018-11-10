import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  friendId: string;
  constructor(private router: ActivatedRoute) {
    router.params.subscribe( map => this.friendId = map.friendId);
  }

  ngOnInit() {
  }

}
