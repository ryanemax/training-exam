import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface Goods{
    goodsNo:string;
    goodsNm:string;
    saleType:number;
    maker:string;
    wsCnt:number;

}
@Component({
  selector: 'app-ws-goods-list',
  templateUrl: './ws-goods-list.component.html',
  styleUrls: ['./ws-goods-list.component.scss']
})
export class WsGoodsListComponent implements OnInit {

  goodsList:Array<Goods>;
  constructor(private http:Http) {
    this.loadGoodsList();

  }

  loadGoodsList(){
    /* this.goodsList = [{goodsNo:"gn0001", goodsNm:"牙膏", saleType:1, maker:"狮王", wsCnt: 40},
     {goodsNo:"gn0002", goodsNm:"尿不湿", saleType:1, maker:"花王", wsCnt: 12},
     {goodsNo:"gn0003", goodsNm:"洗面奶", saleType:1, maker:"资生堂", wsCnt: 9},
     {goodsNo:"gn0004", goodsNm:"奶粉", saleType:2, maker:"明治", wsCnt: 42},
     {goodsNo:"gn0005", goodsNm:"厚木180D丝袜", saleType:1, maker:"大丸", wsCnt: 30}];  */
     let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods";
     let headers:Headers = new Headers();
     headers.append("Content-Type","application/json");
     headers.append("X-Parse-Application-Id","dev");
     headers.append("X-Parse-Master-Key","angulardev");

     let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.goodsList = data.json().results;
    });
  }

  addGoods(){
    let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newGoods: Goods = {goodsNo:"gn0002", goodsNm:"尿不湿", saleType:1, maker:"花王", wsCnt: 12};
    this.http.post(url,newGoods,options).subscribe(data=>{
      this.loadGoodsList();
    });
  }
  ngOnInit() {
  }

  deleteGoods(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/MyGoods"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
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
