import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface Goods{
    goodsNo:string;
    goodsNm:string;
    saleType:number;
    maker:string;
    wsCnt:number;

}

interface ParseResponse {
    results: any[];
}

@Injectable()
export class WsGoodsService{
    goodsList:any[];
    constructor(private http:HttpClient){
    }

  loadGoodsList(){
    /* this.goodsList = [{goodsNo:"gn0001", goodsNm:"牙膏", saleType:1, maker:"狮王", wsCnt: 40},
     {goodsNo:"gn0002", goodsNm:"尿不湿", saleType:1, maker:"花王", wsCnt: 12},
     {goodsNo:"gn0003", goodsNm:"洗面奶", saleType:1, maker:"资生堂", wsCnt: 9},
     {goodsNo:"gn0004", goodsNm:"奶粉", saleType:2, maker:"明治", wsCnt: 42},
     {goodsNo:"gn0005", goodsNm:"厚木180D丝袜", saleType:1, maker:"大丸", wsCnt: 30}];  */
     let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods";
     let headers:HttpHeaders = new HttpHeaders();
     headers = headers.set("Content-Type","application/json")
          .set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
        headers:headers
      };
      return this.http.get<ParseResponse>(url,options).subscribe(data=>{
        this.goodsList = data['results'];
        console.log(this.goodsList);
      });
  }

  addGoods(){
    let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json")
         .set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newGoods: Goods = {goodsNo:"gn0002", goodsNm:"尿不湿", saleType:1, maker:"花王", wsCnt: 12};
    this.http.post(url,newGoods,options).subscribe(data=>{
      this.loadGoodsList();
    });
  }

  deleteGoods(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json")
         .set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadGoodsList();
    });
  }

  sortGoods(type:string){
    if('asc' == type){
      this.goodsList.sort((a:Goods, b:Goods) => {
        if(a.goodsNo > b.goodsNo){
            return 1;
        }else if(a.goodsNo < b.goodsNo){
            return -1;
        }else{
          return 0;
        }
     });
    }else if('desc' == type){
        this.goodsList.sort((a:Goods, b:Goods) => {
          if(a.goodsNo > b.goodsNo){
              return -1;
          }else if(a.goodsNo < b.goodsNo){
              return 1;
          }else{
            return 0;
          }
        });
    }else{
      this.goodsList.sort((a:Goods, b:Goods) => {
      let temp = Number(Math.random()*1000).toFixed(0);
            if(temp > '500'){
        return -1;
      }else if(temp < '500'){
          return 1;
      }else{
        return 0;
      }});
    }
    console.log("sortgoodsList Works!");
  }
}