import { Component, OnInit,AfterViewInit, Input, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import "rxjs/operators/map";

let url = "http://47.92.145.25:80/parse";
let headers: Headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("X-Parse-Application-Id", "dev");
headers.append("X-Parse-Master-Key", "angulardev");
let options = { headers: headers };

@Component({
  selector: 'app-eightstock-detail',
  templateUrl: './eightstock-detail.component.html',
  styleUrls: ['./eightstock-detail.component.scss']
})


export class EightstockDetailComponent implements OnInit,AfterViewInit {
  stockd: any;
  stockIndexes: any;
  indexData: any=[];
  volData: any=[];
  xAxisData: any=[];
  id: any;
  @ViewChild("stockLineChart") stockLineChart;
  @ViewChild("stockVolChart") stockVolChart;
  constructor(private route: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params["params"]["id"];
      this.getStockById(this.id);
    });
    this.getStockIndex();
  }

  getStockById(id) {

    this.http.get(url + "/classes/EStock" + "/" + id, options).subscribe(data => {
      this.stockd = data.json();
    });
  }

  getStockIndex() {
    this.http.get(url + "/classes/EStockIndex", options).subscribe(data => {
      this.stockIndexes = data.json().results;
      this.stockIndexes.map(aa=>{
        this.indexData.push(aa['price']);
        this.volData.push(aa['volume']);
        this.xAxisData.push('');
      });
      this.loadStockLineChart();
      this.loadStockVolChart();
    });
  }

  updateSelectStatusById(type) {

    delete this.stockd["objectId"];
    delete this.stockd["createdAt"];
    delete this.stockd["updatedAt"];
    this.stockd['selected'] = type;
    this.http.put(url + "/classes/EStock/" + this.id, this.stockd, options).subscribe(data => {
      this.getStockById(this.id);
    });
  }

  loadStockLineChart() {
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('studentChart');
    let el = this.stockLineChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
      title: {
          text: '分时图'
      },
      tooltip: {},
      legend: {
          data:['价格']
      },
      xAxis: {
          data: this.xAxisData
      },
      yAxis: {
        min: 2950,
        max: 3050
      },
      series: [{
          name: '价格',
          type: 'line',
          animationDelay: function (idx) {
            return idx * 10000;
        },
          data: this.indexData
      }]
  };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  
  loadStockVolChart() {
    // 基于准备好的dom，初始化echarts实例
    let el = this.stockVolChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
      title: {
          text: '成交量'
      },
      tooltip: {},
      legend: {
          data:['成交量']
      },
      xAxis: {
          data: this.xAxisData
      },
      yAxis: {
      },
      series: [{
          name: '成交量',
          type: 'bar',
          data: this.volData
      }]
  };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.loadStockLineChart();   
    this.loadStockVolChart();
  }

}
