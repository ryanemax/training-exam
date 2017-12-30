import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface User {
    id?: number;
    name: string;
    github: string;
    sex: string;
    count: number;
    objectId?:string;
    updatedAt?:string;
    createdAt?:string;
  }
  
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class StudentService{
    users:any[];
    constructor(private http:HttpClient){
    }
  loadUsersData() {
    // this.users = [
    //   {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
    //   {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
    //   {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
    //   {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
    //   {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/User12";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.users = data['results'];
      console.log(this.users);
    });
  }


    addNewUser() {
        let url = "http://47.92.145.25:80/parse"+"/classes/User12";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };
        let newUser: User = {
          name: "Jack",
          github: "Jack",
          sex: "male",
          count: 666
        };
        this.http.post(url,newUser,options).subscribe(data=>{
          this.loadUsersData();
        });
      }
    
      deleteUserByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/User12"+"/"+id;
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
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        }
    
        if (type === 'desc') {
          this.users.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
        }
    
        if(type === 'random') {
          for(let i=0, len=this.users.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.users[rand];
            this.users[rand] = this.users[i];
            this.users[i] = temp;
          }
        }
        console.log("sortUsers Works!");
      }
    
      
    
}