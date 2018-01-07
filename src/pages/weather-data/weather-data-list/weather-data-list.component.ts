import {Component, AfterViewInit, ViewChild} from '@angular/core';
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
export class WeatherDataListComponent implements AfterViewInit {
  @ViewChild("weatherDataChart") weatherDataChart;  
  // weatherDataList:Array<WeatherData>;

  constructor(private http:HttpClient,
    private weatherDataServ:WeatherDataService,
    public dialog: MatDialog) { 
    // this.weatherDataServ.loadWeatherData();
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

  showChart(){
    let cols = {}
    let datas = {}
    let appendIdx : number = 0 ;
    this.weatherDataServ.weatherDataList.forEach(item=>{
      cols[item.objectId] = item.dateInfo;
      appendIdx = item.temperature.indexOf("-");
      if (appendIdx > 0) {
        datas[item.objectId] = item.temperature.substring(0, appendIdx);
      } else {
        datas[item.objectId] = item.temperature;
      }
    })
    this.loadWeatherDataChart(Object.values(cols),Object.values(datas)); 
  }
  loadWeatherDataChart(cols,datas){
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('weatherDataChart');
    let el = this.weatherDataChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: '一周天气变化图'
        },
        tooltip: {},
        legend: {
            data:['最低温度一览']
        },
        xAxis: {
            data: cols
        },
        yAxis: {},
        series: [{
            name: '最低温度一览',
            type: 'bar',
            data: datas
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.weatherDataServ.loadWeatherData().then(data=>{
      this.showChart();
    });
  }
}