import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';
import { Http } from '@angular/http';
// import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

// Cloud 微服务接口库
import {Parse} from "../../cloud/cloud";
// End of Cloud

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
    constructor(private httpclient:HttpClient,private http:Http){
    }
  // loadUsersData() {
   
  //   let url = "http://47.92.145.25:80/parse"+"/classes/Student";
  //   let headers:HttpHeaders = new HttpHeaders();
  //   headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

  //   let options:any ={
  //     headers:headers
  //   };
  //   return this.httpclient.get<ParseResponse>(url,options).subscribe(data=>{
  //     this.users = data['results'];
  //     console.log(this.users);
  //   });
  // }
    loadUsersData() {
    let query = new Parse.Query("Student",this.httpclient);
    query.equalTo("sex","male");
    query.limit(10);
    query.find().subscribe(data=>{
      this.users = data;
    });
  }


    addNewUser(user) {
        if(user["name"]===""||user["github"]===""){
          alert("请输入正确的用户信息");
        }

        let url = "http://47.92.145.25:80/parse"+"/classes/Student";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };

        if(!user.objectId){
        // 新增用户
        this.httpclient.post(url,user,options).subscribe(data=>{
          this.loadUsersData();
        });
      }else{
        // 修改用户
        url = "http://47.92.145.25:80/parse"+"/classes/Student/"+user.objectId;
        delete user["objectId"];
        delete user["createdAt"];
        delete user["updatedAt"];
        this.httpclient.put(url,user,options).subscribe(data=>{
          this.loadUsersData();
        });
      }


      }
    
      deleteUserByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Student"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.httpclient.delete(url,options).subscribe(data=>{
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