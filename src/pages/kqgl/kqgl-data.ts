import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface User {
    id?: number;
    name: string;
    cq: string;
    qq: string;
    dksj: string;
    objectId?:string;
    updatedAt?:string;
    createdAt?:string;
  }
  interface ParseResponse {
    results: any[];
  }

  @Injectable()
export class KqglService{

    users:any[];
    constructor(private http:HttpClient){
    }



  loadUsersData() {

    /*
    this.users = [
      {id: 5, name: "Ryane", cq: "✔", qq: "", dksj:"20171115 12:12:55"},
      {id: 4, name: "Liming", cq: "✔", qq: "", dksj:"20171115 12:12:55"},
      {id: 3, name: "Xiaohong", cq: "✔", qq: "", dksj:"20171115 12:12:55"},
      {id: 1, name: "Zhangdayong", cq: "", qq: "✔", dksj:"20171115 12:12:55"},
      {id: 2, name: "Hanmeimei", cq: "", qq: "✔", dksj:"20171115 12:12:55"}
    ];*/
    // let url = "http://47.92.145.25:80/parse"+"/classes/Kqgl";
    // let headers:Headers = new Headers();
    // headers.append("Content-Type","application/json");
    // headers.append("X-Parse-Application-Id","dev");
    // headers.append("X-Parse-Master-Key","angulardev");

    // let options ={
    //   headers:headers
    // };
    // this.http.get(url,options).subscribe(data=>{
    //   this.users = data.json().results;
    // });

    let url = "http://47.92.145.25:80/parse"+"/classes/Kqgl";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.users = data['results'];
    });
  }


  addNewUser(user?) {
    let url = "http://47.92.145.25:80/parse"+"/classes/Kqgl";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    let newUser: User = {
      name: "Jack",
      cq: "1",
      qq: "",
      dksj: "20171212 00:12:56"
    };
    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadUsersData();
    });
  }


  deleteUserByID(id) {
    // this.users.forEach((user, index, arr)=> {
    //   if (user.id == id) {
    //     arr.splice(index, 1);
    //   }
    // })

    let url = "http://47.92.145.25:80/parse"+"/classes/Kqgl"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadUsersData();
    });

  }

  sortUsers(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type === 'asc') {
      this.users.sort(function (a, b) {
        if (a.dksj > b.dksj) {
          return 1;
        }
        if (a.dksj < b.dksj) {
          return -1;
        }
        return 0;
      });
    }

    if (type === 'desc') {
      this.users.sort(function (a, b) {
        if (a.dksj > b.dksj) {
          return -1;
        }
        if (a.dksj < b.dksj) {
          return 1;
        }
        return 0;
      });
    }

    // if(type === 'random') {
    //   for(let i=0, len=this.users.length; i<len; i++){
    //     let rand = Number(Math.random()*len).toFixed(0);
    //     let temp = this.users[rand];
    //     this.users[rand] = this.users[i];
    //     this.users[i] = temp;
    //   }
    // }
    this.users.sort(function(){return Math.random()>0.5?-1:1;});  
    console.log("sortUsers Works!");
  }
}