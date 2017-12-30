import { Component, OnInit } from '@angular/core';

interface Book {
  id: number,
  name: string,
  cycle: string,
  price: string,
  status: string
}

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.scss']
})
export class BookHomeComponent implements OnInit {
  books: Array<Book>;
  selectedBook:any={
    id:666,
    name:"Kingsman",
    cycle:"male",
    price:"kingsman",
    status:"0"
  };

  constructor() {
    this.loadBooksData();
  }
  selectBook(book){
    this.selectedBook = book;
  }

  sortBooks(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
      this.books.sort(function (a, b) {
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
      this.books.sort(function (a, b) {
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
      for(let i=0, len=this.books.length; i<len; i++){
        let rand = Number(Math.random()*len).toFixed(0);
        let temp = this.books[rand];
        this.books[rand] = this.books[i];
        this.books[i] = temp;
      }
    }
    console.log("sortUsers Works!");
  }
  loadBooksData() {
    this.books = [
      {id: 5, name: "Chinese", cycle: "3天", price: "800RMB", status:"0"},
      {id: 4, name: "English", cycle: "5天", price: "200RMB", status:"0"},
      {id: 3, name: "Japanese", cycle: "1天", price: "100RMB", status:"0"},
      {id: 1, name: "dance", cycle: "8天", price: "700RMB", status:"0"},
      {id: 2, name: "sing", cycle: "9天", price: "500RMB", status:"0"}
    ];
  }

  addNewBook() {
    let uuid = Number(Math.random() * 1000).toFixed(0);
    let newBook: Book = {
      id: Number(uuid),
      name: "Jack",
      cycle: "Jack",
      price: "male",
      status: ""
          }
    this.books.push(newBook);
  }

  // deleteBookByID(id) {
  //   this.books.forEach((book, index, arr)=> {
  //     if (book.id == id) {
  //       arr.splice(index, 1);
  //     }
  //   })
  // }
  ngOnInit() {
  }

}
