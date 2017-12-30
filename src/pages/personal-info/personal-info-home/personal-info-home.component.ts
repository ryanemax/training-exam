import {Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface User {
  id?: number;
  name: string;
  phone: number;
  sex: string;
  email: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}


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
        if (a.objectId > b.objectId) {
          return 1;
        }
        if (a.objectId < b.objectId) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.users.sort(function (a, b) {
        if (a.objectId > b.objectId) {
          return -1;
        }
        if (a.objectId < b.objectId) {
          return 1;
        }
        return 0;
      });
    }
  }

  addNewPeople() {
    let url = "http://47.92.145.25:80/parse"+"/classes/PersonalInfo";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newUser: User = {
      name: "xiaoming",
      phone: 18640877761,
      sex: "male",
      email: "18640877761@163.com"
    };
    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  ngOnInit() {
  }

}
