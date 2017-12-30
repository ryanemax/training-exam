import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { StudentService } from '../student-data';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

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
    let url = "http://47.92.145.25:80/parse"+"/classes/User12"+"/"+id;
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
