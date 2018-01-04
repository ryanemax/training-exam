import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-weather-data-item',
  templateUrl: './weather-data-item.component.html',
  styleUrls: ['./weather-data-item.component.scss']
})
export class WeatherDataItemComponent implements OnInit {
  weatherData:any;
  constructor(private route: ActivatedRoute,
    private http:HttpClient,) {
    this.weatherData = {
      dateInfo:""
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id = params["params"]["id"];
      this.getUserById(id);
    });
  }

  getUserById(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/WeatherData"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    this.http.get(url,options).subscribe(data=>{
      this.weatherData = data;
    });
  }

}
 