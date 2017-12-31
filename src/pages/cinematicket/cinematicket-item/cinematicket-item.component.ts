import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { CinemaService } from '../cinematicket-data';
@Component({
  selector: 'app-cinematicket-item',
  templateUrl: './cinematicket-item.component.html',
  styleUrls: ['./cinematicket-item.component.scss']
})
export class CinematicketItemComponent implements OnInit {
  cinema: any;
  constructor(private route:ActivatedRoute,
  private http:HttpClient,
  private cinemaServ:CinemaService) {
    this.cinema = {
        name:"Error..."
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let objectId = params["params"]["objectId"];
      this.getCinemaById(objectId);
    });
  }

  getCinemaById(objectId){
    let url = "http://47.92.145.25:80/parse"+"/classes/Cinemas"+"/"+objectId;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    let options:any ={
        headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.cinema = data;
    });
  }
}
