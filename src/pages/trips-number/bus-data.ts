import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Bus {
    id?: number;
    name: string;
    count: number;
  }
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class StudentService{
    buses:any[];
    constructor(private http:HttpClient){
    }
  loadUsersData() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Bus";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.buses = data['results'];
      console.log(this.buses);
    });
  }


    addnewBus() {
        let url = "http://47.92.145.25:80/parse"+"/classes/Bus";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
        let options:any ={
          headers:headers
        };
        let newBus: Bus = {
          name: "Jack",
          count: 666
        };
        this.http.post(url,newBus,options).subscribe(data=>{
          this.loadUsersData();
        });
      }
      deleteUserByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Bus"+"/"+id;
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
          this.buses.sort(function (a, b) {
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
          this.buses.sort(function (a, b) {
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
          for(let i=0, len=this.buses.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.buses[rand];
            this.buses[rand] = this.buses[i];
            this.buses[i] = temp;
          }
        }
        console.log("sortUsers Works!");
      }
}