import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { FlowerService } from '../flower-data';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {

  flower:any;
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
  private flowerServ:FlowerService) {
    this.flower = {
      name:"Unknow Player"
    };
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
    let id = params["params"]["id"];
    this.getFlowerById(id);
  });
  }


  getFlowerById(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/Flower"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    this.http.get(url,options).subscribe(data=>{
      this.flower = data;
    });
  }
}
