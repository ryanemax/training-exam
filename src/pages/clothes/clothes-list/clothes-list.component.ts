import {Component, OnInit} from '@angular/core';

interface Clothes {
  id: number;
}

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {
  cloth: Array<Clothes>;
  selectedclothes:any={
    id:666,
   
  };

  constructor() {
    this.loadClothData();
  }
  selectClothes(cloth){
    this.selectClothes = cloth;
  }
  sortClothes(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type === 'asc') {
      this.cloth.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (type === 'desc') {
      this.cloth.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
    }

    if(type === 'random') {
      for(let i=0, len=this.cloth.length; i<len; i++){
        let rand = Number(Math.random()*len).toFixed(0);
        let temp = this.cloth[rand];
        this.cloth[rand] = this.cloth[i];
        this.cloth[i] = temp;
      }
    }
    console.log("sortUsers Works!");
  }

  loadClothData() {
    this.cloth = [
      {id: 5},
      {id: 4},
      {id: 3},
      {id: 1},
      {id: 2}
    ];
  }

  addNewClothes() {
    let cloth = Number(Math.random() * 1000).toFixed(0);
    let newCloth: Clothes = {
      id: Number(cloth),
     
    }
    this.cloth.push(newCloth);
  }

  deleteUserByID(id) {
    this.cloth.forEach((cloth, index, arr)=> {
      if (cloth.id === id) {
        arr.splice(index, 1);
      }
    })
  }

  ngOnInit() {
  }

}
