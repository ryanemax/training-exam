import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BookService} from '../book-data';




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  constructor(private http:HttpClient,private bookServ:BookService) {
    this.bookServ.loadBooksData();
  }
 ngOnInit() {
  }
}
