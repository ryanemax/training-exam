import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface Book {
  bookID: number,
  name: string,
  author: string,
  date: string,
  sale: number
}
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Array<Book>;
  selectedBooks:any={
    bookID:5165165,
    name:"钢铁是怎样炼成的",
    author:"奥斯托洛夫斯基",
    date:new Date(1999,6,30),
    sale:"1024"
  };

  constructor(private http:Http) {
    this.loadBooksData();
  }
  selectBook(book){
    this.selectedBooks = book;
  }
  sortBooks(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
      this.books.sort(function (a, b) {
        if (a.bookID > b.bookID) {
          return 1;
        }
        if (a.bookID < b.bookID) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.books.sort(function (a, b) {
        if (a.bookID > b.bookID) {
          return -1;
        }
        if (a.bookID < b.bookID) {
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
    // this.books = [
    //   {bookID: 4534, sale:100, name: "语文", author: "阿迪锅", date: "1995,2,3"},
    //   {bookID: 4534, sale:999, name: "数学", author: "人撒骨灰", date: "1937,5,30"},
    //   {bookID: 8473, sale:1000, name: "英语", author: "傻大个", date: "1988,12,30"},
    //   {bookID: 48542, sale:3432500, name: "生物", author: "电话", date: "2012,10,30"},
    //   {bookID: 3483, sale:10012312321, name: "化学", author: "是个啥", date: "2011,5,28"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Book";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.books = data.json().results;
    });
  }

  // addNewUser() {
  //   let url = "http://47.92.145.25:80/parse"+"/classes/Book";
  //   let headers:Headers = new Headers();
  //   headers.append("Content-Type","application/json");
  //   headers.append("X-Parse-Application-Id","dev");
  //   headers.append("X-Parse-Master-Key","angulardev");
  //   let options ={
  //     headers:headers
  //   };
  //   // let newUser: Book = {
  //   //   bookID: number,
  //   //   name: "",
  //   //   author: string,
  //   //   date: string,
  //   //   sale: number
  //   // };
  //   // this.http.post(url,newUser,options).subscribe(data=>{
  //   //   this.loadUsersData();
  //   // });
  // }

  // addNewBook() {
  //   let uuid = Number(Math.random() * 1000).toFixed(0);
  //   let newUser: Book = {
  //     bookID: Number(uuid),
  //     name: "Jack",
  //     author: "Jack",
  //     date: "new Date(1997,7,7)",
  //     sale: 888
  //   }
  //   this.books.push(newUser);
  // }

  deleteUserByID(id) {
    this.books.forEach((user, index, arr)=> {
      if (user.bookID == id) {
        arr.splice(index, 1);
      }
    })
  }
  ngOnInit() {
  }
}
