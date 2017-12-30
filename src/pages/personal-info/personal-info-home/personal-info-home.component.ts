import {Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";


@Component({
  selector: 'app-personal-info-home',
  templateUrl: './personal-info-home.component.html',
  styleUrls: ['./personal-info-home.component.scss']
})
export class PersonalInfoHomeComponent implements OnInit {
  users: any;

  constructor(private http:Http) {
    this.loadUsersData();
  }
  loadUsersData() {
    /*this.users = [
      {id: 1, phone: 18640865272, name: "linxiongmao", email: "linxiongmao@163.com", sex: "男"},
      {id: 2, phone: 13442652121, name: "shaoxiao", email: "shaoxiao@yahoo.com", sex: "男"},
      {id: 3, phone: 13342384011, name: "wangxiaohong", email: "wangxiaohong@qq.com", sex: "女"},
      {id: 4, phone: 18640813115, name: "Zhangdayong", email: "Zhangdayong@163.com", sex: "男"},
      {id: 5, phone: 13340869874, name: "Hanmeimei", email: "Hanmeimei@126.com", sex: "女"}
    ];*/


    let url = "http://47.92.145.25:80/parse"+"/classes/PersonalInfo";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.users = data.json().results;
    });


  }

  sortUsers(type) {

    if (type == 'asc') {
      this.users.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.users.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
    }
  }

  ngOnInit() {
  }

}
