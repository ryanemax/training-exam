import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { StudentService } from '../coffee-star1-data.ts';


@Component({
  selector: 'app-coffee-star1-detail',
  templateUrl: './coffee-star1-detail.component.html',
  styleUrls: ['./coffee-star1-detail.component.scss']
})
export class CoffeeDetailComponent implements OnInit {

  user:any;
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
  private studentServ:StudentService) {
    this.user = {
      name:"Unknow Player"
    };
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
    let id = params["params"]["id"];
    this.getUserById(id);
  });
  }


  getUserById(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/Coffeestar1"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    this.http.get(url,options).subscribe(data=>{
      this.user = data;
    });
  }
}
