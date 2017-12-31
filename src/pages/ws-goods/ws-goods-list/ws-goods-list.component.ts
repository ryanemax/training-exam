import { Component, AfterViewInit,ViewChild} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { WsGoodsService } from '../ws-goods-data';

import { MatDialog} from '@angular/material';
import { WsGoodsDialogComponent} from '../ws-goods-dialog/ws-goods-dialog';
import { MatTabsModule} from '@angular/material/tabs';

interface Goods{
  goodsNo:string;
  goodsNm:string;
  saleType:number;
  maker:string;
  wsCnt:number;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-ws-goods-list',
  templateUrl: './ws-goods-list.component.html',
  styleUrls: ['./ws-goods-list.component.scss']
})
export class WsGoodsListComponent implements AfterViewInit{

  @ViewChild("goodsChart") goodsChart; 
  @ViewChild("goodsChart2") goodsChart2; 
  goodsNmList:Array<string>;
  goodsCntList:Array<string>;

  constructor(private http:HttpClient,private service:WsGoodsService, public dialog: MatDialog) {
    this.service.loadGoodsList();
  }

  openDialog(goods?): void {
    if(!goods){
      goods = {goodsNo:"",goodsNm:""};
    }
    let dialogRef = this.dialog.open(WsGoodsDialogComponent, {
      width: '250px',
      data: goods,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed');
        this.service.addNewGoods(result);
       // this.loadGoodsChart();
      }
    });
  }

  loadGoodsChart(){
    // 基于准备好的dom，初始化echarts实例
    let el = this.goodsChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: '商品在库数量图表'
        },
        tooltip: {},
        legend: {
            data:['在库数量']
        },
        xAxis: {
            data: this.service.getGoodsNmList()
        },
        yAxis: {},
        series: [{
            name: '在库数量',
            type: 'bar',
            data: this.service.getGoodsCntList()
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  loadCharTwo(){
  
    // 基于准备好的dom，初始化echarts实例
    let el = this.goodsChart2.nativeElement;
    let myChart = echarts.init(el);

    let option = {
      title : {
          text: '在库商品数量',
          subtext: '纯属虚构',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: this.service.getGoodsNmList()
      },
      series : [
          {
              name: '在库数量',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:this.service.goodsPieList,
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.loadGoodsChart();
    this.loadCharTwo();
  }
}
