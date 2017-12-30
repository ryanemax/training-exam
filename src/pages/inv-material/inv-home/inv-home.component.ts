import { Component, OnInit } from '@angular/core';
interface Item {
  id: number,
  code: string,
  uom: string,
  description: string,
  count: number
}

@Component({
  selector: 'app-inv-home',
  templateUrl: './inv-home.component.html',
  styleUrls: ['./inv-home.component.scss']
})

export class InvHomeComponent implements OnInit {
  items: Array<Item>;
  constructor() {
    this.loadItemsData();
  }

  ngOnInit() {
  }
  loadItemsData() {
    this.items = [
      {id: 1, code:"XX001",uom:"Each",description:"ring",count:1000},
      {id: 2, code:"XX002",uom:"Each",description:"shell",count:3000},
      {id: 3, code:"XX003",uom:"Each",description:"bolt and nut",count:66},
      {id: 4, code:"XX004",uom:"Each",description:"block hoop",count:780},
      {id: 5, code:"XX005",uom:"Each",description:"nameplate",count:34}
    ];
  }
  sortItems(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
      this.items.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.items.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
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
    let uuid = Number(Math.random() * 1000).toFixed(0);
    let newItem: Item = {
      id: Number(uuid),
      code: "XXFS01",
      uom: "Meter",
      description: "test",
      count: 666
    }
    this.items.push(newItem);
  }

  deleteItemByID(id) {
    this.items.forEach((item, index, arr)=> {
      if (item.id == id) {
        arr.splice(index, 1);
      }
    })
  }

}
