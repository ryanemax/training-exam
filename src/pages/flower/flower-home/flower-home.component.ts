import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  github:string,
  price:string
}
@Component({
  selector: 'app-flower-home',
  templateUrl: './flower-home.component.html',
  styleUrls: ['./flower-home.component.scss']
})
export class FlowerHomeComponent implements OnInit {
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
      {id:1,name:"百合",github:"lily",price:"800"},
      {id:2,name:"玫瑰",github:"rose",price:"2800"},
      {id:3,name:"郁金香",github:"tulip",price:"3000"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"樱花",
      github:"sakura",
      price:"200"
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
