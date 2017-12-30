import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface Book {

  objectId?:string,
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
    name:"钢铁是怎样炼成的",
    author:"奥斯托洛夫斯基",
    date:new Date(1999,6,30),
    sale:1024
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
        if (a.sale > b.sale) {
          return 1;
        }
        if (a.sale < b.sale) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.books.sort(function (a, b) {
        if (a.sale > b.sale) {
          return -1;
        }
        if (a.sale < b.sale) {
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
    //   {sale: 4534, sale:100, name: "语文", author: "阿迪锅", date: "1995,2,3"},
    //   {sale: 4534, sale:999, name: "数学", author: "人撒骨灰", date: "1937,5,30"},
    //   {sale: 8473, sale:1000, name: "英语", author: "傻大个", date: "1988,12,30"},
    //   {sale: 48542, sale:3432500, name: "生物", author: "电话", date: "2012,10,30"},
    //   {sale: 3483, sale:10012312321, name: "化学", author: "是个啥", date: "2011,5,28"}
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

  addNewBook() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Book";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newUser: Book = {
      name: "1",
      author: "1",
      date: "1",
      sale:0 
    };
    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadBooksData();
    });
  }

  deleteBookByID(id) {
    let url = "http://47.92.145.25:80/parse"+"/classes/Book"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadBooksData();
    });
  }
  ngOnInit() {
  }
}
