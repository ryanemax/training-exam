import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';

interface User{
  id:number,
  name:string,
  price:number,
  nums:number
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

  users:Array<User>;
  marketIndex:Array<MarketIndex>;
  constructor() { 
    this.loadUsersData()
  }
  sortUsers(type){
    var users = this.users;
    var len = users.length,
        i, j, tmp;
    if(type == 'random'){
      for(i=0; i<len; i++){
         users = users.sort(()=>(Math.random()>.5 ? -1 : 1));
      }
    }
    else{
      for(i=0; i<len; i++){
        for(j=len-1; j>i; j--){
            if(type == 'asc'){
              if(users[j].price < users[j-1].price){
                tmp = users[j-1];
                users[j-1] =users[j];
                users[j] = tmp;
            }
            }
            if(type == 'desc'){
              if(users[j].price > users[j-1].price){
                tmp = users[j-1];
                users[j-1] =users[j];
                users[j] = tmp;
            }
            }
        }
    }
    }
    console.log("sortUsers Works!")
  }
  loadUsersData(){
    this.users = [
      {id:600000,name:"浦发银行",price:10,nums:123},
      {id:600004,name:"白云机场",price:19,nums:555},
      {id:600006,name:"东风汽车",price:6,nums:7575},
      {id:600007,name:"中国国贸",price:14,nums:65412},
      {id:600008,name:"首创股份",price:13,nums:9951},
      {id:600009,name:"上海机场",price:31,nums:987},
   
    ];
    this.marketIndex = [
      {id:1,name:"上证指数",price:3301,percent:4.09,total:123},
      {id:1,name:"深证成指",price:10089,percent:13.09,total:123},
      {id:1,name:"创业板指",price:1748,percent:1.09,total:123},

  //     <td class="col-4 market-index"> 3301 +4.09 0.65% 1523.42亿</td>
  // <td class="col-4 market-index"> 10089 +13.09 0.17% 3023.96亿</td>
  // <td class="col-4 market-index"> 1748 -1.09 0.25% 567.60亿</td>
   
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000000).toFixed(0); 
    let newprice = Number(Math.random()*100).toFixed(0); 
    let newNums = Number(Math.random()*1000).toFixed(0); 
    let newUser:User = { 
       id:Number(uuid), 
       name:"新选股票", 
       price:Number(newprice), 
       nums:Number(newNums) 
     } 

    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
