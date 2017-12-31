import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
import { WeatherDataService } from '../weather-data';

import {MatDialog} from '@angular/material';
import {WeatherDataDialogComponent} from '../weather-data-dialog/weather-data-dialog';

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

@Component({
  selector: 'app-weather-data-list',
  templateUrl: './weather-data-list.component.html',
  styleUrls: ['./weather-data-list.component.scss']
})
export class WeatherDataListComponent implements OnInit {
  weatherDataList:Array<WeatherData>;

  constructor(private http:HttpClient,
    private weatherDataServ:WeatherDataService,
    public dialog: MatDialog) { 
    this.weatherDataServ.loadWeatherData();
  }
  ngOnInit() {
  }

  openDialog(weatherData?): void {
    if(!weatherData){
      weatherData = {dateInfo:"",weekInfo:""};
    }
    let dialogRef = this.dialog.open(WeatherDataDialogComponent, {
      width: '250px',
      data: weatherData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.weatherDataServ.addWeatherData(result);
      }
    });
  }
}
