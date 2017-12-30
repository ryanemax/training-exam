import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";

interface Book {

  objectId?:string,
  name: string,
  author: string,
  date: string,
  sale: number
}
interface ParseResponse {
  results: any[];
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

  constructor(private http:HttpClient) {
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

   
   // console.log("sortUsers Works!");
  }

  loadBooksData() {
    // this.users = [
    //   {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
    //   {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
    //   {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
    //   {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
    //   {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Book";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.books = data['results'];
      //console.log(this.books);
    });
  }


    addNewBook() {
        let url = "http://47.92.145.25:80/parse"+"/classes/Book";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };
        let newBooks: Book = {
          name: "1",
          author: "1",
          date: "1",
          sale: 0
        };
        this.http.post(url,newBooks,options).subscribe(data=>{
          this.loadBooksData();
        });
      }
    
      deleteBookByID(id) {
        let url = "http://47.92.145.25:80/parse"+"/classes/Book"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options ={
          headers:headers
        };
    
        this.http.delete(url,options).subscribe(data=>{
          this.loadBooksData();
        });
      }
  updateBookByID(id) {
    let url = "http://47.92.145.25:80/parse"+"/classes/Book"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    
  }
  ngOnInit() {
  }
}
