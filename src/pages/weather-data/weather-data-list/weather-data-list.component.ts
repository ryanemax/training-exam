import { Component, OnInit } from '@angular/core';

interface WeatherData{
  dateInfo:string,
  weekInfo:string,
  temperature:string,
  humidity:string,
  pm:string,
  comfort:string
}

@Component({
  selector: 'app-weather-data-list',
  templateUrl: './weather-data-list.component.html',
  styleUrls: ['./weather-data-list.component.scss']
})
export class WeatherDataListComponent implements OnInit {
  weatherDataList:Array<WeatherData>;
  constructor() { 
    this.loadWeatherData();
  }

  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == "asc") {
      this.weatherDataList.sort(function(a, b) {
        if (a.dateInfo > b.dateInfo) {
          return 1;
        }
        if (a.dateInfo < b.dateInfo) {
          return -1;
        }
      });
    } else if (type == "desc") {
      this.weatherDataList.sort(function(a, b) {
        if (a.dateInfo < b.dateInfo) {
          return 1;
        }
        if (a.dateInfo > b.dateInfo) {
          return -1;
        }
      });
    } else {
      this.weatherDataList.sort(function(a, b) {
        return Math.trunc(Math.random()*10)});
    }

    console.log("sortUsers Works!");
  }

  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);

  }
  deleteByDate(id){
    this.weatherDataList.forEach((weatherInfo,index,arr)=>{
      if(weatherInfo.dateInfo==id){
        arr.splice(index,1);
      }
    })
  }

  ngOnInit() {
  }

  loadWeatherData(){
    this.weatherDataList = [
      {dateInfo:"1day",weekInfo:"Monday",temperature:"11",humidity:"25",pm:"0.5%",comfort:"Comfortable"},
      {dateInfo:"2day",weekInfo:"Tuesday",temperature:"6",humidity:"15",pm:"0.5%",comfort:"Discomfort "},
      {dateInfo:"3day",weekInfo:"Wednesday",temperature:"7",humidity:"12",pm:"0.5%",comfort:"Comfortable"},
      {dateInfo:"4day",weekInfo:"Thursday",temperature:"3",humidity:"15",pm:"0.5%",comfort:"Comfortable"},
      {dateInfo:"5day",weekInfo:"Friday",temperature:"8",humidity:"36",pm:"0.5%",comfort:"Comfortable"},
      {dateInfo:"6day",weekInfo:"Saturday",temperature:"14",humidity:"100",pm:"0.5%",comfort:"Discomfort"},
      {dateInfo:"7day",weekInfo:"Sunday",temperature:"12",humidity:"50",pm:"0.5%",comfort:"Comfortable"}
    ];
  }
}
