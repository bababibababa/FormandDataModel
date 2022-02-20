import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from './friend';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friend:Friend;
  friendForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.friend=new Friend("bob","bob@jmail.com",42);
    this.friendForm=this.fb.group ({
      FriendName:[''],
      FriendEmail:[''],
      FriendAge:['']
    });
  }

  ngOnInit(): void {
  }
  changeDefaultName(str:string){
    this.friend.name=str;
  }

}
