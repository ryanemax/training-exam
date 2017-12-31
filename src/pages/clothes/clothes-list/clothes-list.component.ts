import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ClothesService } from '../clothes-data';
import {ClothesDialogComponent} from '../clothes-dialog/clothes-dialog';
import { MatDialog } from '@angular/material';


interface Clothes {
  id?: number;
  name: string;
  brand: string;
  birthday:string;
  img:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent {
 
  @ViewChild("chartButton") chartButton;  
  @ViewChild("clothesChart") clothesChart;  
  searchText:string;
  selectedClothes:any={
    id:111,
    name:"Kingsman",
    birthday:"1202/3/2",
    brand:"sasasa"
   
  };
  /*foods:any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];*/
  Data1:any = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
  Data2:any = ["衬衫2","羊毛衫2","雪纺衫2","裤子","高跟鞋","袜子"];
  showData:any
  constructor(private http:HttpClient,private clothesServ:ClothesService, public dialog: MatDialog) {
    this.clothesServ.loadClothesData();
    this.showData = this.Data1;
  }
  selectUser(cloth){
    this.selectedClothes = cloth;
  }
  openDialog(cloth?): void {
    if(!cloth){
      cloth = {name:"",brand:""};
    }
    let dialogRef = this.dialog.open(ClothesDialogComponent, {
      width: '250px',
      data: cloth,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clothesServ.addNewClothes(result);
    });
  }
  // loadNewClothesData(){
  //   this.showData = this.Data2;
  //   this.loadClothesChart();
  // }
  // loadClothesChart(){
  //   // 基于准备好的dom，初始化echarts实例
  //   // let el = document.getElementById('studentChart');
  //   let el = this.clothesChart.nativeElement;
  //   let myChart = echarts.init(el);

  //   // 指定图表的配置项和数据
  //   let option = {
  //       name: {
  //           text: '服装定位'
  //       },_
  //       brand: {},
  //       legend: {
  //           data:['销量']
  //       },
  //       xAxis: {
  //           data: this.showData
  //       },
  //       yAxis: {},
  //       series: [{
  //           name: '销量',
  //           type: 'bar',
  //           data: [5, 20, 36, 10, 10, 20]
  //       }]
  //   };

  //   // 使用刚指定的配置项和数据显示图表。
  //   myChart.setOption(option);
  // }

  // ngAfterViewInit(){
  //   this.loadClothesChart();    
  //   this.chartButton.nativeElement.style.background = "red";
  // }

}
