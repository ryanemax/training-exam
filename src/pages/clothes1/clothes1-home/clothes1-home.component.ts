import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Clothes1Service } from '../clothes1-data';

@Component({
  selector: 'app-clothes1-home',
  templateUrl: './clothes1-home.component.html',
  styleUrls: ['./clothes1-home.component.scss']
})
export class Clothes1HomeComponent implements OnInit {

  clothes1:any;
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
  private clothes1Serv:Clothes1Service) {
    this.clothes1 = {
      name:"Unknow Player"
    };
  }

    ngOnInit() {
      this.route.paramMap.subscribe(params=>{
        let id = params["params"]["id"];
        this.getClothes1ById(id);
      });
      }
    
    
      getClothes1ById(id){
        let url = "http://47.92.145.25:80/parse"+"/classes/Clothes1"+"/"+id;
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    
        let options:any ={
          headers:headers
        };
    
        this.http.get(url,options).subscribe(data=>{
          this.clothes1 = data;
        });
      }
    }
    
