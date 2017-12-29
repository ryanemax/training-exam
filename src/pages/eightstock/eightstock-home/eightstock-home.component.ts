import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';

interface Stock{
  id:number,
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



@Component({
  selector: 'app-eightstock-home',
  templateUrl: './eightstock-home.component.html',
  styleUrls: ['./eightstock-home.component.scss']
})
export class EightstockHomeComponent implements OnInit {

  stocks:Array<Stock>;
  marketIndexes:Array<MarketIndex>;
  constructor() { 
    this.loadUsersData()
  }
  
  loadUsersData(){
    this.stocks = [
      {id:600000,name:"浦发银行",startPrice:9,nowPrice:9.5,minPrice:9.3,maxPrice:10.2,volume:123,amount:4,marketValue:54,circulationValue:20},
      {id:600004,name:"白云机场",startPrice:11,nowPrice:11.5,minPrice:11.3,maxPrice:12.2,volume:555,amount:44,marketValue:234,circulationValue:200},
      {id:600006,name:"东风汽车",startPrice:23,nowPrice:22,minPrice:21.3,maxPrice:23.2,volume:7575,amount:36,marketValue:5,circulationValue:3},
      {id:600007,name:"中国国贸",startPrice:4,nowPrice:4,minPrice:2.3,maxPrice:5.2,volume:65412,amount:87,marketValue:374,circulationValue:293},
      {id:600008,name:"首创股份",startPrice:66,nowPrice:67,minPrice:64.3,maxPrice:69.2,volume:9951,amount:70,marketValue:45,circulationValue:40},
      {id:600009,name:"上海机场",startPrice:112,nowPrice:110,minPrice:100.3,maxPrice:120.2,volume:987,amount:229,marketValue:314,circulationValue:120},
   
    ];
    this.marketIndexes = [
      {id:1,name:"上证指数",price:3301,percent:4.09,total:1523.42},
      {id:2,name:"深证成指",price:10089,percent:13.09,total:3023.96},
      {id:3,name:"创业板指",price:1748,percent:-1.09,total:567.60}
    ];
  }
  deleteUserByID(id){
    this.stocks.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
