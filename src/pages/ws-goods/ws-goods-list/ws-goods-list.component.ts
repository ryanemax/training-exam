import { Component, OnInit } from '@angular/core';

interface Goods{
    goods_no:string;
    goods_nm:string;
    sale_type:number;
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
  constructor() {
    this.loadGoodsList();
  }

  loadGoodsList(){
     this.goodsList = [{goods_no:"gn0001", goods_nm:"牙膏", sale_type:1, maker:"狮王", wsCnt: 40},
     {goods_no:"gn0002", goods_nm:"尿不湿", sale_type:1, maker:"花王", wsCnt: 12},
     {goods_no:"gn0003", goods_nm:"洗面奶", sale_type:1, maker:"资生堂", wsCnt: 9},
     {goods_no:"gn0004", goods_nm:"奶粉", sale_type:2, maker:"明治", wsCnt: 42},
     {goods_no:"gn0005", goods_nm:"厚木180D丝袜", sale_type:1, maker:"大丸", wsCnt: 30}];
  }
  ngOnInit() {
  }

  sortGoods(type:string){
    if('asc' == type){
      this.goodsList.sort((a:Goods, b:Goods) => {
        if(a.goods_no > b.goods_no){
            return 1;
        }else if(a.goods_no < b.goods_no){
            return -1;
        }else{
          return 0;
        }
     });
    }else if('desc' == type){
        this.goodsList.sort((a:Goods, b:Goods) => {
          if(a.goods_no > b.goods_no){
              return -1;
          }else if(a.goods_no < b.goods_no){
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
