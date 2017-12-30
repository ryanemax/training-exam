import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";

interface User {
  id?: number;
  name: string;
  phone: string;
  sex: string;
  email: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-personal-info-home',
  templateUrl: './personal-info-home.component.html',
  styleUrls: ['./personal-info-home.component.scss']
})
export class PersonalInfoHomeComponent implements OnInit {
  users: any;

  constructor(private http:HttpClient) {
    this.loadUsersData();
  }
  loadUsersData() {
    let url = "http://47.92.145.25:80/parse"+"/classes/PersonalInfo";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.users = data['results'];
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

  addNewUser() {
    let url = "http://47.92.145.25:80/parse"+"/classes/PersonalInfo";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    let newUser: User = {
      phone: "18640877761",
      name: "xiaoming",
      email: "18640877761@163.com",
      sex: "male"
    };

    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  deleteUserByID(id) {
    let url = "http://47.92.145.25:80/parse"+"/classes/PersonalInfo"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  ngOnInit() {
  }

}
