import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { ClothesService } from '../clothes-data';
@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.scss']
})
export class ClothesDetailComponent implements OnInit {
  clothes:any;
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
  private studentServ:ClothesService) { 
    this.clothes = {
      name:"Unknow Cloth"
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id = params["params"]["id"];
      this.getClothesById(id);
    });
  }
  getClothesById(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/Clothes"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    this.http.get(url,options).subscribe(data=>{
      this.clothes = data;
    });
  }
}
