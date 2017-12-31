import {Component, AfterViewInit, ViewChild} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentService } from '../student-data';

import {MatDialog} from '@angular/material';
import {StudentDialogComponent} from '../student-dialog/student-dialog';

interface User {
  id?: number;
  name: string;
  github: string;
  sex: string;
  count: number;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements AfterViewInit {
  @ViewChild("chartButton") chartButton;  
  @ViewChild("studentChart") studentChart;  
  searchText:string;
  selectedUser:any={
    id:666,
    name:"Kingsman",
    sex:"male",
    github:"kingsman",
    count:"0"
  };
  Data1:any = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
  Data2:any = ["衬衫2","羊毛衫2","雪纺衫2","裤子","高跟鞋","袜子"];
  showData:any
  constructor(private http:HttpClient,private studentServ:StudentService,
  public dialog: MatDialog) {
    this.studentServ.loadUsersData();
    this.showData = this.Data1;
  }
  selectUser(user){
    this.selectedUser = user;
  }
  openDialog(user?): void {
    if(!user){
      user = {name:"",github:""};
    }
    let dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.studentServ.addNewUser(result);
    });
  }

  loadNewChartData(){
    this.showData = this.Data2;
    this.loadStudentChart();
  }
  loadStudentChart(){
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('studentChart');
    let el = this.studentChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: this.showData
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.loadStudentChart();    
    this.chartButton.nativeElement.style.background = "red";
  }

}