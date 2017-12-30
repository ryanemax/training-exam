import { Component, OnInit } from '@angular/core';
interface User {
  id: number;
  name: string;
  github: string;
  sex: string;
  goods: string;
}
@Component({
  selector: 'app-coffee-star1-home',
  templateUrl: './coffee-star1-home.component.html',
  styleUrls: ['./coffee-star1-home.component.scss']
})
export class CoffeeStar1HomeComponent implements OnInit {
    users:Array<User>;
    constructor() {
      this.loadUsersData();
    }
    selectUser(user){
      this.selectedUser = user;
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
        {id:1,name:"摩卡",github:"两颗星",sex:"¥50.00",goods:"100"},
        {id:2,name:"黑咖啡",github:"两颗星",sex:"¥25.00",goods:"10000"},
        {id:3,name:"卡布奇诺",github:"两颗星",sex:"¥32.00",goods:"11000000"}
      ];
    }
    addNewUser(){
      let uuid = Number(Math.random()*1000).toFixed(0);
      let newUser:User = {
        id:Number(uuid),
        name:"拿铁",
        github:"natie",
        sex:"200",
        goods:"100000"
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
  