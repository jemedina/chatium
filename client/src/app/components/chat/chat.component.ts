import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  friendId: string;
  
  mockup_user: any = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    status:true
  }


  constructor(private router: ActivatedRoute) {
    router.params.subscribe( map => this.friendId = map.friendId);
  }

  ngOnInit() {
  }

}
