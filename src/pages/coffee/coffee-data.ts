import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Coffee {
  id?:number;
  name:string;
  brand:string;
  colorNumber:string;
  price:number;
  soldNumber:number;
  introduction:string;

  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
  }
  
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class CoffeeService{

    coffees:any[];
    constructor(private http:HttpClient){
    }
  loadCoffeesData() {
    // this.users = [
    //   {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
    //   {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
    //   {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
    //   {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
    //   {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Coffee";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.coffees = data['results'];
      console.log(this.coffees);
    });
  }


    addNewCoffee(coffee) {
      if(coffee["name"]===""||coffee["brand"]===""){
        alert("请输入正确的用户信息");
      }

        let url = "http://47.92.145.25:80/parse"+"/classes/Coffee";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };

        if(!coffee.objectId){
        // 新增用户
        this.http.post(url,coffee,options).subscribe(data=>{
          this.loadCoffeesData();
        });
      }else{
        // 修改用户
        url = "http://47.92.145.25:80/parse"+"/classes/Coffee/"+coffee.objectId;
        delete coffee["objectId"];
        delete coffee["createdAt"];
        delete coffee["updatedAt"];
        this.http.put(url,coffee,options).subscribe(data=>{
          this.loadCoffeesData();
        });
      }


      }
    
      deleteCoffeeByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Coffee"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.http.delete(url,options).subscribe(data=>{
          this.loadCoffeesData();
        });
      }

      sortCoffees(type) {
        // 参考MDN中的ES6，Array语法
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
        if (type === 'asc') {
          this.coffees.sort(function (a, b) {
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
          this.coffees.sort(function (a, b) {
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
          for(let i=0, len=this.coffees.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.coffees[rand];
            this.coffees[rand] = this.coffees[i];
            this.coffees[i] = temp;
          }
        }
        console.log("sortCoffees Works!");
      }
    
      
    
}