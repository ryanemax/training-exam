import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-info-home',
  templateUrl: './personal-info-home.component.html',
  styleUrls: ['./personal-info-home.component.scss']
})
export class PersonalInfoHomeComponent implements OnInit {
  users: any;
  constructor() {
    this.loadUsersData();
  }

  loadUsersData() {
    this.users = [
      {id: 1, phone: 18640865272, name: "linxiongmao", email: "linxiongmao@163.com", sex: "男"},
      {id: 2, phone: 134426521, name: "shaoxiao", email: "shaoxiao@yahoo.com", sex: "男"},
      {id: 3, phone: 13342384011, name: "wangxiaohong", email: "wangxiaohong@qq.com", sex: "女"},
      {id: 4, phone: 18640813115, name: "Zhangdayong", email: "Zhangdayong@163.com", sex: "男"},
      {id: 5, phone: 13340869874, name: "Hanmeimei", email: "Hanmeimei@126.com", sex: "女"}
    ];
  }

  ngOnInit() {
  }

}
