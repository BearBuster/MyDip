import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUserInfo} from "../../interfaces/UserInfo";

@Component({
  selector: 'app-my-qr',
  templateUrl: './my-qr.component.html',
  styleUrls: ['./my-qr.component.scss']
})
export class MyQrComponent implements OnInit {

  userInfo: IUserInfo;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    if(userId === null){
      userId = '0';
    }
     this.userService.getUserInfo(parseInt(userId)).subscribe((data) => {
       this.userInfo = data;
     })
  }

}
