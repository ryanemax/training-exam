import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  detailName:string,
  address:string
}

@Component({
  selector: 'app-warehouse-goods-home',
  templateUrl: './warehouse-goods-home.component.html',
  styleUrls: ['./warehouse-goods-home.component.scss']
})
export class WarehouseGoodsHomeComponent implements OnInit {

  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

    let ret =0 ;
    this.users.sort(function(a, b) {
      if (a.id > b.id) {
        ret=1;
      }
      if (a.id < b.id) {
        ret= -1;
      }
      if(type=='desc'){
        ret=ret > 0? -1 : 1;
        
      }
      return  ret;
    }
    )
  }

  mySort(users) {
    let t:User;
    for(var i = 0; i < this.users.length; i++) {
        var rand = parseInt(String(Math.random() * this.users.length));
        t = this.users[rand];
        this.users[rand] = this.users[i];
        this.users[i] = t;
    }
  }

  loadUsersData(){
    this.users = [
      {id:1,name:"小火锅",detailName:"四川小火锅",address:"成都"},
      {id:2,name:"洗面奶",detailName:"自然堂洗面奶",address:"北京"},
      {id:3,name:"洗发水",detailName:"潘婷洗发水",address:"上海"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"虾饺",
      detailName:"广州早茶",
      address:"广州"
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
