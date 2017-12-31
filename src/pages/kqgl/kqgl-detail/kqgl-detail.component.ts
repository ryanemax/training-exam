import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-kqgl-detail',
  templateUrl: './kqgl-detail.component.html',
  styleUrls: ['./kqgl-detail.component.scss']
})
export class KqglDetailComponent implements OnInit {
  user:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient
  ) {
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
    let url = "http://47.92.145.25:80/parse"+"/classes/Kqgl"+"/"+id;
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
