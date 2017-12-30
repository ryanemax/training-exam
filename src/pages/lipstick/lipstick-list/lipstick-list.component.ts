import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface Lipstick{
  id?:number;
  name:string;
  brand:string;
  colorNumber:string;
  price:number;
  soldNumber:number;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

@Component({
  selector: 'app-lipstick-list',
  templateUrl: './lipstick-list.component.html',
  styleUrls: ['./lipstick-list.component.scss']
})
export class LipstickListComponent implements OnInit {
  lipsticks:Array<Lipstick>;
    selectedlipsticks:any={
      id:666,
      name:"纪梵希小羊皮",
      brand:"纪梵希 GIVENCHY",
      colorNumber:"N306法式红",
      price:355,
      soldNumber:352541
  };
  constructor(private http:Http) {
  this.loadLipsticksData();
  }
  selectLipsticks(lipstick){
    this.selectedlipsticks = lipstick;
  }

  sortlLipsticks(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type === 'asc') {
      this.lipsticks.sort(function (a, b) {
        if (a.soldNumber > b.soldNumber) {
          return 1;
        }
        if (a.soldNumber < b.soldNumber) {
          return -1;
        }
        return 0;
      });
    }

    if (type === 'desc') {
      this.lipsticks.sort(function (a, b) {
        if (a.soldNumber > b.soldNumber) {
          return -1;
        }
        if (a.soldNumber < b.soldNumber) {
          return 1;
        }
        return 0;
      });
    }

    if(type === 'random') {
      for(let i=0, len=this.lipsticks.length; i<len; i++){
        let rand = Number(Math.random()*len).toFixed(0);
        let temp = this.lipsticks[rand];
        this.lipsticks[rand] = this.lipsticks[i];
        this.lipsticks[i] = temp;
      }
    }
    console.log("sortlipsticks Works!");
  }

  loadLipsticksData(){
    // this.lipsticks=[
    //   {id:1,name:"纪梵希小羊皮",brand:"纪梵希 GIVENCHY",colorNumber:"N306法式红",price:355,soldNumber:352541,introduction:"适合肤质: 各种肤质,功效: 滋润"},
    //   {id:2,name:"纪梵希小羊皮",brand:"纪梵希 GIVENCHY",colorNumber:"N102优雅米色",price:355,soldNumber:523464,introduction:"妆效: 自然,遮盖力: 轻度"},
    //   {id:3,name:"纪梵希小粉皮",brand:"纪梵希 GIVENCHY",colorNumber:"小粉唇",price:320,soldNumber:35424555,introduction:"妆效: 自然,遮盖力: 轻度"},
    //   {id:4,name:"TF SCARLET ROUGE",brand:"汤姆福特 TOM FORD",colorNumber:"#16号",price:357,soldNumber:255641,introduction:"烈焰炫彩幻魅唇膏"},
    //   {id:5,name:"ROUGE PUR COUTURE ",brand:"圣罗兰",colorNumber:"#52 星星色",price:320,soldNumber:9635125,introduction:"隐藏于手袋内的一个美妆法宝"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Lipsticks";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.lipsticks = data.json().results;
    });
  }

  addNewLipstick() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Lipsticks";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newUser: Lipstick  = {
        name:"纪梵希小羊皮",
        brand:"纪梵希 GIVENCHY",
        colorNumber:"N305红",
        price:355,
        soldNumber:752541
    };
    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadLipsticksData();
    });
  }

  deleteLipstickByID(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/Lipsticks"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    this.http.delete(url,options).subscribe(data=>{
      this.loadLipsticksData();
    });
  }

  ngOnInit() {
  }

}
