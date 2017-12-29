import { Component, OnInit } from '@angular/core';

// interface bus {
//   id: number;
//   name: string;
//   count: number;
// }

@Component({
  selector: 'app-trips-number-home',
  templateUrl: './trips-number-home.component.html',
  styleUrls: ['./trips-number-home.component.scss']
})
export class TripsNumberHomeComponent implements OnInit {
  // buss: Array<bus>;
  // selectedbus:any={
  //   id:20,
  //   name:"辉煌号",
  //   count:"100"
  // };

  // constructor() { 
  //   this.loadbussData();
  // }
  // selectbus(bus){
  //   this.selectedbus = bus;
  // }
  // sortbuss(type) {
  //   // 参考MDN中的ES6，Array语法
  //   // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  //   if (type === 'asc') {
  //     this.buss.sort(function (a, b) {
  //       if (a.id > b.id) {
  //         return 1;
  //       }
  //       if (a.id < b.id) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   }

  //   if (type === 'desc') {
  //     this.buss.sort(function (a, b) {
  //       if (a.id > b.id) {
  //         return -1;
  //       }
  //       if (a.id < b.id) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   }

  //   if(type === 'random') {
  //     for(let i=0, len=this.buss.length; i<len; i++){
  //       let rand = Number(Math.random()*len).toFixed(0);
  //       let temp = this.buss[rand];
  //       this.buss[rand] = this.buss[i];
  //       this.buss[i] = temp;
  //     }
  //   }
  //   console.log("sortbuss Works!");
  // }
  // loadbussData() {
  //   this.buss = [
  //     {id: 5, count:100, name: "和谐号"},
  //     {id: 4, count:99, name: "幸福号"},
  //     {id: 3, count:1000, name: "使命号"},
  //     {id: 1, count:34, name: "征程号"},
  //     {id: 2, count:10, name: "小康号"}
  //   ];
  // }
  // addNewbus() {
  //   let uuid = Number(Math.random() * 1000).toFixed(0);
  //   let newbus: bus = {
  //     id: Number(uuid),
  //     name: "青云号",
  //     count: 666
  //   };
  //   this.buss.push(newbus);
  // }

  ngOnInit() {
  }

}
