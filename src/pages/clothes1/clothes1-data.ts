import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Clothes1 {
    id?: number;
    name: string;
    price: number;
    
    count: number;
    
  }
  
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class Clothes1Service{
    clothes1list:any[];
    constructor(private http:HttpClient){
    }
  loadClothes1Data() {
    // this.users = [
    //   {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
    //   {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
    //   {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
    //   {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
    //   {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Clothes1";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.clothes1list = data['results'];
      console.log(this.clothes1list);
    });
  }


  addNewClothes1(clothes1) {
    if(clothes1["name"]===""||clothes1["price"]===""||clothes1["count"]===""){
      alert("请输入正确的服装信息");
    }

    let url = "http://47.92.145.25:80/parse"+"/classes/Clothes1";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    clothes1["price"] = Number(clothes1["price"])
    clothes1["count"] = Number(clothes1["count"])


    if(!clothes1.objectId){
    // 新增用户
    this.http.post(url,clothes1,options).subscribe(data=>{
      this.loadClothes1Data();
    });
  }else{
    // 修改用户
    url = "http://47.92.145.25:80/parse"+"/classes/Clothes1/"+clothes1.objectId;
    delete clothes1["objectId"];
    delete clothes1["createdAt"];
    delete clothes1["updatedAt"];
    this.http.put(url,clothes1,options).subscribe(data=>{
      this.loadClothes1Data();
    });
  }


  }


    
      deleteClothes1ByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Clothes1"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.http.delete(url,options).subscribe(data=>{
          this.loadClothes1Data();
        });
      }

      sortClothes1(type) {
        // 参考MDN中的ES6，Array语法
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
        if (type === 'asc') {
          this.clothes1list.sort(function (a, b) {
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
          this.clothes1list.sort(function (a, b) {
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
          for(let i=0, len=this.clothes1list.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.clothes1list[rand];
            this.clothes1list[rand] = this.clothes1list[i];
            this.clothes1list[i] = temp;
          }
        }
        console.log("sortClothes1 Works!");
      }
    
      
    
}