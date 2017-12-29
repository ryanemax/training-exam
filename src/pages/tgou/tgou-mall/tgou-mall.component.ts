import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  github:string,
  sex:string
}

@Component({
  selector: 'app-tgou-mall',
  templateUrl: './tgou-mall.component.html',
  styleUrls: ['./tgou-mall.component.scss']
})
export class TgouMallComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
      // alert('dfdfg');
      this.users.sort((a,b)=>(a.id-b.id));
    }
    if (type == 'desc') {
      this.users.sort((a,b)=>(b.id-a.id));
    }
    if (type == 'random') {
      this.users.sort((a,b)=>(Math.random() - 0.5));
    }
    console.log("sortUsers Works!");
  }
  loadUsersData(){
    this.users = [
      {id:1,name:"五粮液",github:"wuliangye",sex:"¥1199.00"},
      {id:2,name:"茅台",github:"maotai",sex:"¥1798.00"},
      {id:3,name:"獐子岛海参",github:"zhangzidao",sex:"¥10899.00"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"泸州老窖",
      github:"luzhou",
      sex:"200"
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
