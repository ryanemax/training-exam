import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface User{
  id? : number;
  name : string;
  github : string;
  sex : string;
  img? : string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

@Component({
  selector: 'app-tgou-mall',
  templateUrl: './tgou-mall.component.html',
  styleUrls: ['./tgou-mall.component.scss']
})
export class TgouMallComponent implements OnInit {
  users:Array<User>;
  constructor(private http:Http) {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type === 'asc') {
      // alert('dfdfg');
      this.users.sort((a,b)=>(Number(a.sex) -Number(b.sex)));
    }
    if (type === 'desc') {
      this.users.sort((a,b)=>(Number(b.sex) -Number(a.sex)));
    }
    if (type === 'random') {
      this.users.sort((a,b)=>(Math.random() - 0.5));
    }
    console.log("sortUsers Works!");
  }
  loadUsersData(){
    // let src1="//img.alicdn.com/bao/uploaded/i4/TB1gu4vKFXXXXXYXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg";
    // let src2="//img.alicdn.com/bao/uploaded/i3/3532929347/TB2qGlPfx6I8KJjSszfXXaZVXXa_!!3532929347.jpg_b.jpg";
    // let src3="//img.alicdn.com/bao/uploaded/i1/1579528508/TB28gDFmWigSKJjSsppXXabnpXa_!!1579528508.jpg_b.jpg";
    // this.users = [
    //   {id:1,img:src1,name:"五粮液",github:"wuliangye",sex:"1199.00"},
    //   {id:2,img:src2,name:"茅台",github:"maotai",sex:"1798.00"},
    //   {id:3,img:src3,name:"獐子岛海参",github:"zhangzidao",sex:"10899.00"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/TGoods";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.users = data.json().results;
    });
  }
  addNewUser(){
    // let uuid = Number(Math.random()*1000).toFixed(0);
    // let newUser:User = {
    //   id:Number(uuid),
    //   name:"泸州老窖",
    //   github:"luzhou",
    //   sex:"200"
    // };
    // this.users.push(newUser);
    let url = "http://47.92.145.25:80/parse"+"/classes/TGoods";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newUser: User = {
      name:"泸州老窖",
      github:"luzhou",
      sex:"200",
      img:"//img.alicdn.com/bao/uploaded/i4/725677994/TB2.EvqiQfb_uJjSsrbXXb6bVXa_!!725677994.jpg_b.jpg"
    };
    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadUsersData();
    });
  }
  deleteUserByID(id){
    // this.users.forEach((user,index,arr)=>{
    //   if(user.id===id){
    //     arr.splice(index,1);
    //   }
    // });
    let url = "http://47.92.145.25:80/parse"+"/classes/TGoods"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    this.http.delete(url,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  ngOnInit() {
  }

}
