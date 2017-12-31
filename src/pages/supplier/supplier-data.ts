import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


interface Supplier {
    id?: number,
    name: string,
    mail: string,
    location: string,
    product: string
  }
  
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class SupplierService{
    users:any[];
    constructor(private http:HttpClient){
    }
  loadUsersData() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Supplier";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.users = data['results'];
      //console.log(this.users);
    });
  }


    addNewUser() {
        let url = "http://47.92.145.25:80/parse"+"/classes/Supplier";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };
        let newUser: Supplier = {
            name: "Tom",
            mail: "Tom_mail",
            location: "jp",
            product: "sap"
          };
        this.http.post(url,newUser,options).subscribe(data=>{
          this.loadUsersData();
        });
      }
    
      deleteUserByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Supplier"+"/"+id;
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