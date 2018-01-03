import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface WeatherData{
    id?: number;
    dateInfo:string,
    weekInfo:string,
    temperature:string,
    humidity:string,
    pm:string,
    status:string
  }
  
  interface ParseResponse {
    results: any[];
  }

  @Injectable()
  export class WeatherDataService{

    weatherDataList:Array<WeatherData>;
    constructor(private http:HttpClient) {}

    loadWeatherData() {
        let url = "http://47.92.145.25:80/parse"+"/classes/WeatherData";
        let headers:HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

        let options:any ={
        headers:headers
        };
        return this.http.get<ParseResponse>(url,options).subscribe(data=>{
        this.weatherDataList = data['results'];
        console.log(this.weatherDataList);
        });
    }

    sortUsers(type){
      if (type == "date") {
        this.weatherDataList.sort(function(a, b) {
          if (a.dateInfo > b.dateInfo) {
            return 1;
          }
          if (a.dateInfo < b.dateInfo) {
            return -1;
          }
        });
      } else if (type == "temperature") {
        this.weatherDataList.sort(function(a, b) {
          if (a.dateInfo < b.dateInfo) {
            return 1;
          }
          if (a.dateInfo > b.dateInfo) {
            return -1;
          }
        });
      }
  
      console.log("sort Works!");
    }
  
    addWeatherData(weatherData){
      if(weatherData["dateInfo"]===""||weatherData["weekInfo"]===""){
        alert("请输入正确的日期信息");
        return;
      }
      let url = "http://47.92.145.25:80/parse"+"/classes/WeatherData";
      let headers:HttpHeaders = new HttpHeaders();

      headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
      let options :any ={
        headers:headers
      };

      if(!weatherData.objectId){
        // 新增用户
        this.http.post(url,weatherData,options).subscribe(data=>{
          this.loadWeatherData();
        });
      }
      else {
        // 修改用户
        url = "http://47.92.145.25:80/parse"+"/classes/WeatherData/"+weatherData.objectId;
        delete weatherData["objectId"];
        delete weatherData["createdAt"];
        delete weatherData["updatedAt"];
        this.http.put(url,weatherData,options).subscribe(data=>{
          this.loadWeatherData();
        });
      }
  
    }

    deleteByObjId(id){
      let url = "http://47.92.145.25:80/parse"+"/classes/WeatherData"+"/"+id;
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
  
      let options:any ={
        headers:headers
      };
  
      this.http.delete(url,options).subscribe(data=>{
        this.loadWeatherData();
      });
    }
  }
  
  