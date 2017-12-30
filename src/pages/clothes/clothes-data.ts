import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Cloyhes {
    id?: number;
    name: string;
    birthday:string;
    brand:string;
  }
  
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class ClothesService{
    clothes:any[];
    constructor(private http:HttpClient){
    }
  loadClothesData() {
    
    let url = "http://47.92.145.25:80/parse"+"/classes/Clothes";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.clothes = data['results'];
      console.log(this.clothes);
    });
  }


    /*addNewUser() {
      let url = "http://47.92.145.25:80/parse"+"/classes/Clothes";
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
  
      let options:any ={
        headers:headers
      };
        let newClothes: Clothes = {
          name: "衣服",
          brand:"dada",
          birthday:"2012/03/02"
        };
        this.http.post(url,newUser,options).subscribe(data=>{
          this.loadUsersData();
        });
      }*/
    
      deleteUserByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Clothes"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.http.delete(url,options).subscribe(data=>{
          this.loadClothesData();
        });
      }

      sortUsers(type) {
        // 参考MDN中的ES6，Array语法
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
        if (type === 'asc') {
          this.clothes.sort(function (a, b) {
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
          this.clothes.sort(function (a, b) {
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
          for(let i=0, len=this.clothes.length; i<len; i++){
            let rand = Number(Math.random()*len).toFixed(0);
            let temp = this.clothes[rand];
            this.clothes[rand] = this.clothes[i];
            this.clothes[i] = temp;
          }
        }
        console.log("sortClothes Works!");
      }
    
      
    
}