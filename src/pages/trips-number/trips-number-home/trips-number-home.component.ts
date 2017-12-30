import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";

interface Bus {
  id?: number;
  name: string;
  count: number;
}
interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-trips-number-home',
  templateUrl: './trips-number-home.component.html',
  styleUrls: ['./trips-number-home.component.scss']
})
export class TripsNumberHomeComponent implements OnInit {
  buses: Array<Bus>;
  searchText:string;
  selectedUser:any={
    id:666,
    name:"Kingsman",
    count:"0"
  };
  // foods:any = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  constructor(private http:Http) {
    this.loadUsersData();
  }
  selectUser(user){
    this.selectedUser = user;
  }
  sortUsers(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type === 'asc') {
      this.buses.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (type === 'desc') {
      this.buses.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
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

  loadUsersData() {
    // this.users = [
    //   {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
    //   {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
    //   {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
    //   {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
    //   {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Bus";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.buses = data['results'];
    });
  }

  addNewUser() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Bus";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    let newUser: Bus = {
      name: "Jack",
      count: 666
    };
    this.http.post(url,newUser,options).subscribe(data=>{
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

  ngOnInit() {
  }

}
