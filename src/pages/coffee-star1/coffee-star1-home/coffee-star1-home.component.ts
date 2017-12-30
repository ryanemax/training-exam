import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
interface User {
  id?: number;
  name: string;
  github: string;
  sex: string;
  goods: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-coffee-star1-home',
  templateUrl: './coffee-star1-home.component.html',
  styleUrls: ['./coffee-star1-home.component.scss']
})
export class CoffeeStar1HomeComponent implements OnInit {
    users:Array<User>;
    searchText:string;
    selectedUser:any={
      id:666,
      name:"moka",
      sex:"50",
      github:"两颗星",
      goods:"100"
    };
    constructor(private http:HttpClient) {
      this.loadUsersData();
    }
    selectUser(user){
      this.selectedUser = user;
    }
    sortUsers(type){
      // 参考MDN中的ES6，Array语法
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
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
      if (type == 'random') {
        for(let i=0, len=this.users.length; i<len; i++){
          let rand = Number(Math.random()*len).toFixed(0);
          let temp = this.users[rand];
          this.users[rand] = this.users[i];
          this.users[i] = temp;
        }
      }
      console.log("sortUsers Works!");
    }
    loadUsersData(){
      // this.users = [
      //   {id:1,name:"摩卡",github:"两颗星",sex:"¥50.00",goods:"100"},
      //   {id:2,name:"黑咖啡",github:"两颗星",sex:"¥25.00",goods:"10000"},
      //   {id:3,name:"卡布奇诺",github:"两颗星",sex:"¥32.00",goods:"11000000"}
      // ];
      let url = "http://47.92.145.25:80/parse"+"/classes/Coffeestar1";
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
  
      let options:any ={
        headers:headers
      };
      this.http.get<ParseResponse>(url,options).subscribe(data=>{
        this.users = data['results'];
      });
  
    }
    addNewUser(){
     // let uuid = Number(Math.random()*1000).toFixed(0);
     let url = "http://47.92.145.25:80/parse"+"/classes/Coffeestar1";
     let headers:HttpHeaders = new HttpHeaders();
     headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
     let options:any ={
      headers:headers
    };
      let newUser:User = {
        //id:Number(uuid),
        name:"黑咖啡",
        github:"两颗星",
        sex:"¥25.00",
        goods:"100000"
      }
      //this.users.push(newUser);
      this.http.post(url,newUser,options).subscribe(data=>{
        this.loadUsersData();
      });
    }
    deleteUserByID(id){
      let url = "http://47.92.145.25:80/parse"+"/classes/Coffeestar1"+"/"+id;
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
  