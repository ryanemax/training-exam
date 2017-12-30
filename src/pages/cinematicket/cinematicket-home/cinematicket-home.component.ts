import { Component, OnInit } from '@angular/core';


interface Cinema {
  id: number;
  name: string;
  ticketcounts: number;
}


@Component({
  selector: 'app-cinematicket-home',
  templateUrl: './cinematicket-home.component.html',
  styleUrls: ['./cinematicket-home.component.scss']
})
export class CinematicketHomeComponent implements OnInit {
  cinemas: Array<Cinema>;

  constructor() {
    this.loadCinemaData();
  }
  
  sortcinemas(type){

    // 参考MDN中的ES6，Array语法

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

    if (type == "asc") {
      this.cinemas.sort(function(a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
      });
    } else if (type == "desc") {
      this.cinemas.sort(function(a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
    } else {
      this.cinemas.sort(function(a, b) {
        return Math.trunc(Math.random()*10)});
    }
    console.log("sortcinemas Works!");
  }
  loadCinemaData() {
    this.cinemas = [
      {id:1, name:"芳华", ticketcounts:100000},
      {id:2, name:"犬夜叉", ticketcounts:100},
      {id:3, name:"速度与激情8", ticketcounts:100},
      {id:4, name:"你的名字", ticketcounts:100},
      {id:5, name:"绝地求生", ticketcounts:100},
      {id:6, name:"不知道", ticketcounts:100}
    ];
  }

  addNewCinema(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newCinema:Cinema = {
      id:Number(uuid),
      name:"null",
      ticketcounts:100
    }
    this.cinemas.push(newCinema);
  }
  deleteCinemaByID(id){
    this.cinemas.forEach((Cinema,index,arr)=>{
      if(Cinema.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }
}