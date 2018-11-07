import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile_data : object ={
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    sex:"female"
  }
  


  constructor() { }

  ngOnInit() {
  }

}
