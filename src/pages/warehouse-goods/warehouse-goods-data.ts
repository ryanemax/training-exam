import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";

interface Goods{
    objectid?:string,
    name:string,
    detailName:string,
    address:string
  }
  interface ParseResponse {
    results: any[];
  }

@Injectable()
export class WarehouseGoodsService{

    goodses:Array<Goods>;

    constructor(private http:HttpClient){
        this.loadUsersData();
    }

    sortUsers(type) {
        // 参考MDN中的ES6，Array语法
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    
        let ret =0 ;
        this.goodses.sort(function(a, b) {
          if (a.objectid > b.objectid) {
            ret=1;
          }
          if (a.objectid < b.objectid) {
            ret= -1;
          }
          if(type=='desc'){
            ret=ret > 0? -1 : 1;
            
          }
          return  ret;
        }
        )
      }
    
      mySort(goodses) {
        let t:Goods;
        for(var i = 0; i < this.goodses.length; i++) {
            var rand = parseInt(String(Math.random() * this.goodses.length));
            t = this.goodses[rand];
            this.goodses[rand] = this.goodses[i];
            this.goodses[i] = t;
        }
      }
    
      loadUsersData(){
        let url = "http://47.92.145.25:80/parse"+"/classes/WarehourseGoods";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };
        this.http.get<ParseResponse>(url,options).subscribe(data=>{
         this.goodses = data['results'];
        });
    
      }
      addNewUser(goods){
        if(goods["name"]===""||goods["detailName"]===""){
          alert("请输入正确的商品信息");
        }

        let url = "http://47.92.145.25:80/parse"+"/classes/WarehourseGoods";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
        let options:any ={
          headers:headers
        };
        if(!goods.objectId){
          // 新增用户
          this.http.post(url,goods,options).subscribe(data=>{
            this.loadUsersData();
          });
        }else{
          // 修改用户
          url = "http://47.92.145.25:80/parse"+"/classes/WarehourseGoods/"+goods.objectId;
          delete goods["objectId"];
          delete goods["createdAt"];
          delete goods["updatedAt"];
          this.http.put(url,goods,options).subscribe(data=>{
            this.loadUsersData();
          });
        }
      }
      deletegoodsByID(id){
        // this.goodses.forEach((user,index,arr)=>{
        //   if(user.id==id){
        //     arr.splice(index,1);
        //   }
        // })
    
        let url = "http://47.92.145.25:80/parse"+"/classes/WarehourseGoods"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.http.delete(url,options).subscribe(data=>{
          this.loadUsersData();
        });
      }

}