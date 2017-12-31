import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { BookService} from '../book-data';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient,private bookServ:BookService) { 
      this.book = {
        name:"Unknow Player"
      };
    }

 

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id = params["params"]["id"];
      this.loadBooksData(id);
    });
  }

backHome(){
  history.back();
}

  loadBooksData(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/Book"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    this.http.get(url,options).subscribe(data=>{
      this.book = data;
      console.log(this.book.name);
    });
  }
  

}
