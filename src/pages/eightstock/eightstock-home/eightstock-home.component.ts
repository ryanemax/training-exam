import { Component, OnInit, ElementRef } from '@angular/core';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface Stock{
  stockNo:number,
  name:string,
  startPrice:number,
  nowPrice:number,
  minPrice:number,
  maxPrice:number,
  volume:number,
  amount:number,
  marketValue:number
  circulationValue:number
}
interface MarketIndex{
  id:number,
  name:string,
  price:number,
  percent:number
  total:number
}
let url = "http://47.92.145.25:80/parse"+"/classes/EStock";
let headers:Headers = new Headers();
headers.append("Content-Type","application/json");
headers.append("X-Parse-Application-Id","dev");
headers.append("X-Parse-Master-Key","angulardev");
let options ={ headers:headers };

@Component({
  selector: 'app-eightstock-home',
  templateUrl: './eightstock-home.component.html',
  styleUrls: ['./eightstock-home.component.scss']
})
export class EightstockHomeComponent implements OnInit {

  stocks:Array<Stock>;
  marketIndexes:Array<MarketIndex>;
  tabNo:number;
  sortType:String;
  sortMode:number;
  
  constructor(private http:Http) { 
    this.loadUsersData();
    this.tabNo=1;
    this.sortType='';
    this.sortMode=1;
  }
  
  loadUsersData(){
    // let url = "http://47.92.145.25:80/parse"+"/classes/EStock";
    // let headers:Headers = new Headers();
    // headers.append("Content-Type","application/json");
    // headers.append("X-Parse-Application-Id","dev");
    // headers.append("X-Parse-Master-Key","angulardev");

    // let options ={
    //   headers:headers
    // };
    this.http.get(url,options).subscribe(data=>{
      console.log(data);
      this.stocks = data.json().results;
      console.log(this.stocks);
    });
    
    this.marketIndexes = [
      {id:1,name:"上证指数",price:3301,percent:4.09,total:1523.42},
      {id:2,name:"深证成指",price:10089,percent:13.09,total:3023.96},
      {id:3,name:"创业板指",price:1748,percent:-1.09,total:567.60}
    ];
  }

  changeTab(id){
    this.tabNo=id;
  }

  sortStock(type){
    if(this.sortType!=type){
      this.sortMode=1;
    }
    this.sortType=type;
    if(type=='id'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.stockNo-b.stockNo)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='name'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.name.localeCompare(b.name))));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='startPrice'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.startPrice-b.startPrice)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='nowPrice'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.nowPrice-b.nowPrice)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='change'){
      this.stocks.sort((a,b)=>(this.sortMode*((a.nowPrice-a.startPrice)-(b.nowPrice-b.startPrice))));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='minPrice'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.minPrice-b.minPrice)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='maxPrice'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.maxPrice-b.maxPrice)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='volume'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.volume-b.volume)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='amount'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.amount-b.amount)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='marketValue'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.marketValue-b.marketValue)));
      this.sortMode=this.sortMode*-1;
    }
    if(type=='circulationValue'){
      this.stocks.sort((a,b)=>(this.sortMode*(a.circulationValue-b.circulationValue)));
      this.sortMode=this.sortMode*-1;
    }
  }

  addItem(){
    let newstock: Stock = {
      stockNo:600004,name:"白云机场",startPrice:11,nowPrice:11.5,minPrice:11.3,maxPrice:12.2,volume:555,amount:44,marketValue:234,circulationValue:200
    };

    // this.http.post(url,newstock,options).subscribe(data=>{
    //   // this.loadUsersData();
    // });

    // this.stocks = [
   
    //   {id:600004,name:"白云机场",startPrice:11,nowPrice:11.5,minPrice:11.3,maxPrice:12.2,volume:555,amount:44,marketValue:234,circulationValue:200},
    //   {id:600006,name:"东风汽车",startPrice:23,nowPrice:22,minPrice:21.3,maxPrice:23.2,volume:575,amount:36,marketValue:5,circulationValue:3},
    //   {id:600007,name:"中国国贸",startPrice:4,nowPrice:4,minPrice:2.3,maxPrice:5.2,volume:412,amount:87,marketValue:374,circulationValue:293},
    //   {id:600008,name:"首创股份",startPrice:66,nowPrice:67,minPrice:64.3,maxPrice:69.2,volume:81,amount:70,marketValue:45,circulationValue:40},
    //   {id:600009,name:"上海机场",startPrice:112,nowPrice:110,minPrice:100.3,maxPrice:120.2,volume:987,amount:229,marketValue:314,circulationValue:120},
   
    // ];
  }

  ngOnInit() {
  }

}
