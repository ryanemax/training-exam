import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Flower {
  id?:number,
  name:string,
  language:string,
  price:string,
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
  }
  
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class FlowerService{
    flowers:any[];
    constructor(private http:HttpClient){
    }
    loadFlowersData(){
      // this.flowers = [
      //   {id:1,name:"百合",language:"百年好合",price:"800"},
      //   {id:2,name:"玫瑰",language:"爱情",price:"2800"},
      //   {id:3,name:"郁金香",language:"荣誉的皇冠",price:"3000"}
      // ];

    let url = "http://47.92.145.25:80/parse"+"/classes/Flower";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.flowers = data['results'];
      console.log(this.flowers);
    });
  }
    addNewFlower() {
        let url = "http://47.92.145.25:80/parse"+"/classes/Flower";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };
        let newFlower: Flower = {
          name:"樱花",
          language:"sakura",
          price:"200"
        };
        this.http.post(url,newFlower,options).subscribe(data=>{
          this.loadFlowersData();
        });
      }
    
      deleteFlowerByID(objectId) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Flower"+"/"+objectId;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.http.delete(url,options).subscribe(data=>{
          this.loadFlowersData();
        });
      }

      sortUsers(type) {
        // 参考MDN中的ES6，Array语法
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
        if (type === 'asc') {
          this.flowers.sort(function (a, b) {
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
          this.flowers.sort(function (a, b) {
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
          for(let i=0, len=this.flowers.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.flowers[rand];
            this.flowers[rand] = this.flowers[i];
            this.flowers[i] = temp;
          }
        }
        console.log("sortFlowers Works!");
      }
    
      
    
}