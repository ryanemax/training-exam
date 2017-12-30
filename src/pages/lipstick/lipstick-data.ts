import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Lipstick{
    id?:number;
    name:string;
    brand:string;
    colorNumber:string;
    price:number;
    soldNumber:number;
    objectId?:string;
    updatedAt?:string;
    createdAt?:string;
  }
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class LipStickService{
    lipsticks:any[];
    constructor(private http:HttpClient){
    }

    loadLipsticksData(){
        // this.lipsticks=[
        //   {id:1,name:"纪梵希小羊皮",brand:"纪梵希 GIVENCHY",colorNumber:"N306法式红",price:355,soldNumber:352541,introduction:"适合肤质: 各种肤质,功效: 滋润"},
        //   {id:2,name:"纪梵希小羊皮",brand:"纪梵希 GIVENCHY",colorNumber:"N102优雅米色",price:355,soldNumber:523464,introduction:"妆效: 自然,遮盖力: 轻度"},
        //   {id:3,name:"纪梵希小粉皮",brand:"纪梵希 GIVENCHY",colorNumber:"小粉唇",price:320,soldNumber:35424555,introduction:"妆效: 自然,遮盖力: 轻度"},
        //   {id:4,name:"TF SCARLET ROUGE",brand:"汤姆福特 TOM FORD",colorNumber:"#16号",price:357,soldNumber:255641,introduction:"烈焰炫彩幻魅唇膏"},
        //   {id:5,name:"ROUGE PUR COUTURE ",brand:"圣罗兰",colorNumber:"#52 星星色",price:320,soldNumber:9635125,introduction:"隐藏于手袋内的一个美妆法宝"}
        // ];
        let url = "http://47.92.145.25:80/parse"+"/classes/Lipsticks";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
        let options:any ={
          headers:headers
        };
        return this.http.get<ParseResponse>(url,options).subscribe(data=>{
          this.lipsticks = data['results'];
          console.log(this.lipsticks);
        });
      }

      addNewLipstick() {
        let url = "http://47.92.145.25:80/parse"+"/classes/Lipsticks";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
        let options ={
          headers:headers
        };
        let newLipstick: Lipstick  = {
            name:"纪梵希小羊皮",
            brand:"纪梵希 GIVENCHY",
            colorNumber:"N305红",
            price:355,
            soldNumber:752541
        };
        this.http.post(url,newLipstick,options).subscribe(data=>{
          this.loadLipsticksData();
        });
      }
      deleteLipstickByID(id){
        let url = "http://47.92.145.25:80/parse"+"/classes/Lipsticks"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
        let options ={
          headers:headers
        };
        this.http.delete(url,options).subscribe(data=>{
          this.loadLipsticksData();
        });
      }

      sortLipsticks(type) {
        // 参考MDN中的ES6，Array语法
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
        if (type === 'asc') {
          this.lipsticks.sort(function (a, b) {
            if (a.soldNumber > b.soldNumber) {
              return 1;
            }
            if (a.soldNumber < b.soldNumber) {
              return -1;
            }
            return 0;
          });
        }
        if (type === 'desc') {
          this.lipsticks.sort(function (a, b) {
            if (a.soldNumber > b.soldNumber) {
              return -1;
            }
            if (a.soldNumber < b.soldNumber) {
              return 1;
            }
            return 0;
          });
        }
        if(type === 'random') {
          for(let i=0, len=this.lipsticks.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.lipsticks[rand];
            this.lipsticks[rand] = this.lipsticks[i];
            this.lipsticks[i] = temp;
          }
        }
        console.log("sortlipsticks Works!");
      }
}