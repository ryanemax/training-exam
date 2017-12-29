import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';

interface Stock{
  id:number,
  name:string,
  price:number,
  change:number,
  volume:number,
  amount:number,
  marketValue:number
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
  sortUsers(type){
    var stocks = this.stocks;
    var len = stocks.length,
        i, j, tmp;
    if(type == 'random'){
      for(i=0; i<len; i++){
        stocks = stocks.sort(()=>(Math.random()>.5 ? -1 : 1));
      }
    }
    else{
      for(i=0; i<len; i++){
        for(j=len-1; j>i; j--){
            if(type == 'asc'){
              if(stocks[j].price < stocks[j-1].price){
                tmp = stocks[j-1];
                stocks[j-1] =stocks[j];
                stocks[j] = tmp;
            }
            }
            if(type == 'desc'){
              if(stocks[j].price > stocks[j-1].price){
                tmp = stocks[j-1];
                stocks[j-1] =stocks[j];
                stocks[j] = tmp;
            }
            }
        }
    }
    }
    console.log("sortUsers Works!")
  }
  loadUsersData(){
    this.stocks = [
      {id:600000,name:"浦发银行",price:10,change:0.5,volume:123,amount:34,marketValue:123},
      {id:600004,name:"白云机场",price:19,change:1.4,volume:555,amount:34,marketValue:123},
      {id:600006,name:"东风汽车",price:6,change:-0.2,volume:7575,amount:34,marketValue:123},
      {id:600007,name:"中国国贸",price:14,change:1.3,volume:65412,amount:34,marketValue:123},
      {id:600008,name:"首创股份",price:13,change:-1.1,volume:9951,amount:34,marketValue:123},
      {id:600009,name:"上海机场",price:31,change:+2,volume:987,amount:34,marketValue:123},
   
    ];
    this.marketIndexes = [
      {id:1,name:"上证指数",price:3301,percent:4.09,total:1523.42},
      {id:2,name:"深证成指",price:10089,percent:13.09,total:3023.96},
      {id:3,name:"创业板指",price:1748,percent:-1.09,total:567.60}
    ];
  }
  addNewStock(){
    let uuid = Number(Math.random()*1000000).toFixed(0); 
    let newprice = Number(Math.random()*100).toFixed(0); 
    let newNums = Number(Math.random()*1000).toFixed(0); 
    let newStock:Stock = { 
       id:Number(uuid), 
       name:"新选股票", 
       price:Number(newprice), 
       change:0.1,
       volume:Number(newNums),
       amount:234,
       marketValue:45345
     } 

    this.stocks.push(newStock);
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
