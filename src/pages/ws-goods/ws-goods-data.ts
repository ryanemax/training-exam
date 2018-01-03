import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface Goods{
    goodsNo:string;
    goodsNm:string;
    saleType:number;
    maker:string;
    wsCnt:number;
    objectId?:string;
    updatedAt?:string;
    createdAt?:string;
}

interface ParseResponse {
    results: any[];
}

@Injectable()
export class WsGoodsService{
    goodsList:any[];
    private goodsNmList:Array<String>;
    private goodsCntList:Array<String>;
    public goodsPieList:Array<any>;
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
      this.goodsNmList = [];
      this.goodsCntList = [];
      this.goodsPieList = [];
      return this.http.get<ParseResponse>(url,options).subscribe(data=>{
        this.goodsList = data['results'];
        this.goodsList.forEach(goods=>{
          this.goodsNmList.push(goods["goodsNm"]);
          this.goodsCntList.push(String(goods["wsCnt"]));
          this.goodsPieList.push({value:goods["wsCnt"], name:goods["goodsNm"]})
        });
     //   console.log(this.goodsList);
      });
  }

  getGoodsNmList():Array<any>{
  //  console.log(this.goodsNmList);
     return this.goodsNmList;
  }

  getGoodsCntList():Array<any>{
  //  console.log(this.goodsCntList);
     return this.goodsCntList;
  }

  addNewGoods(goods) {
    if(goods["goodsNo"]===""||goods["goodsNm"]===""){
      alert("请输入正确的商品信息");
      return;
    }

    let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    goods["wsCnt"] = Number(goods["wsCnt"]);

    if(!goods.objectId){
    // 新增商品
      this.http.post(url,goods,options).subscribe(data=>{
        this.loadGoodsList();
      });
  }else{
    // 修改商品
    url = "http://47.92.145.25:80/parse"+"/classes/MyGoods/"+goods.objectId;
    delete goods["objectId"];
    delete goods["createdAt"];
    delete goods["updatedAt"];
    this.http.put(url,goods,options).subscribe(data=>{
      this.loadGoodsList();
    });
  }


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