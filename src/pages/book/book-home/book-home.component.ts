import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

interface Book {
  id?: number;
  name: string;
  cycle: string;
  price: string;
  status: string;
  path:string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
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

  constructor(private http:HttpClient) {
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
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.books.sort(function (a, b) {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
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
    let url = "http://47.92.145.25:80/parse"+"/classes/Book23";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };
    return this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.books = data['results'];
      console.log(this.books);
    });
  }

  addNewBook() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Book23";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };

    let newBook : Book = {
      name: "长长的路",
      cycle: "2天",
      price: "15元",
      status: "0",
      path:"http://img12.360buyimg.com/n2/jfs/t16318/280/90747547/364871/d190653a/5a28ec95N88d3e08f.jpg"
    };

    this.http.post(url,newBook,options).subscribe(data=>{
      this.loadBooksData();
    });
  }

  deleteBookByID(id) {
    let url = "http://47.92.145.25:80/parse"+"/classes/Book23"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

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
