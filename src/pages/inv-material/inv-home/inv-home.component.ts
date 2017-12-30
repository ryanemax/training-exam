import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
interface Item {
  code: string,
  uom: string,
  description: string,
  count: number,
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

@Component({
  selector: 'app-inv-home',
  templateUrl: './inv-home.component.html',
  styleUrls: ['./inv-home.component.scss']
})

export class InvHomeComponent implements OnInit {
  items: Array<Item>;
  constructor(private http:HttpClient) {
    this.loadItemsData();
  }

  ngOnInit() {
  }
   loadItemsData() {
  //   this.items = [
  //     {id: 1, code:"XX001",uom:"Each",description:"ring",count:1000},
  //     {id: 2, code:"XX002",uom:"Each",description:"shell",count:3000},
  //     {id: 3, code:"XX003",uom:"Each",description:"bolt and nut",count:66},
  //     {id: 4, code:"XX004",uom:"Each",description:"block hoop",count:780},
  //     {id: 5, code:"XX005",uom:"Each",description:"nameplate",count:34}
  //   ];
  let url = "http://47.92.145.25:80/parse"+"/classes/InvItems";
  let headers:HttpHeaders = new HttpHeaders();
  headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

  let options:any ={
    headers:headers
  };
  this.http.get<ParseResponse>(url,options).subscribe(data=>{
    this.items = data['results'];
  });
  }
  sortItems(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
      this.items.sort(function (a, b) {
        if (a.count > b.count) {
          return 1;
        }
        if (a.count < b.count) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.items.sort(function (a, b) {
        if (a.count > b.count) {
          return -1;
        }
        if (a.count < b.count) {
          return 1;
        }
        return 0;
      });
    }

    if(type == 'random') {
      this.items.sort(function (a, b) {
        return Math.random()*10 - Math.random()* 10;
      });
    }
    console.log("sortUsers Works!");
  }
  addNewItem() {
    // let newItem: Item = {
    //   id: Number(uuid),
    //   code: "XXFS01",
    //   uom: "Meter",
    //   description: "test",
    //   count: 666
    // }
    let url = "http://47.92.145.25:80/parse"+"/classes/InvItems";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    let newItem: Item = {
      code: "XXFS01",
       uom: "Meter",
       description: "test",
       count: 666
    };
    this.http.post(url,newItem,options).subscribe(data=>{
      this.loadItemsData();
    });
    //this.items.push(newItem);
  }

  deleteItemByID(id) {
    // this.items.forEach((item, index, arr)=> {
    //   if (item.id == id) {
    //     arr.splice(index, 1);
    //   }
    // })
    let url = "http://47.92.145.25:80/parse"+"/classes/InvItems"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
  
    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadItemsData();
    });
  }

}
