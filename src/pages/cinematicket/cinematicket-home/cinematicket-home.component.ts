import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
import { HttpHandler } from '@angular/common/http/src/backend';

interface Cinema {
  objectId?: number;
  name: string;
  counts: number;
}

interface ParseResponse {
  results:any;
}
@Component({
  selector: 'app-cinematicket-home',
  templateUrl: './cinematicket-home.component.html',
  styleUrls: ['./cinematicket-home.component.scss']
})
export class CinematicketHomeComponent implements OnInit {
  cinemas: Array<Cinema>;

  constructor(private http:HttpClient) {
    this.loadCinemaData();
  }
  
  sortcinemas(type){

    // 参考MDN中的ES6，Array语法

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

    if (type == "asc") {
      this.cinemas.sort(function(a, b) {
        if (a.objectId > b.objectId) {
          return 1;
        }
        if (a.objectId < b.objectId) {
          return -1;
        }
      });
    } else if (type == "desc") {
      this.cinemas.sort(function(a, b) {
        if (a.objectId < b.objectId) {
          return 1;
        }
        if (a.objectId > b.objectId) {
          return -1;
        }
      });
    } else {
      this.cinemas.sort(function(a, b) {
        return Math.trunc(Math.random()*10)});
    }
    console.log("sortcinemas Works!");
  }
  loadCinemaData() {
    let guz = "Cinemas";
    let url = "http://47.92.145.25:80/parse" + "/classes/" + guz;
    let headers:HttpHeaders = new HttpHeaders;
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any = {
      headers:headers
    };
    this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.cinemas = data['results'];
    });

  }

  addNewCinema(){
    let url = "http://47.92.145.25:80/parse"+"/classes/User12";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    

    let options:any = {
        headers:headers
    };

    let newCinema: Cinema = {
      name:"叛逆的鲁鲁修",
      counts:1000,
    };
    this.http.post(url,newCinema,options).subscribe(data =>{
        this.loadCinemaData();
    });

  }
  deleteCinemaByobjectId(objectId){
    this.cinemas.forEach((Cinema,index,arr)=>{
      if(Cinema.objectId==objectId){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }
}