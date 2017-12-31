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

  constructor(private http:HttpClient,private studentServ:StudentService,
  public dialog: MatDialog) {
    this.studentServ.loadUsersData().then(data=>{
      this.showChart();
    });

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
  showChart(){
    let cols = {}
    let datas = {}
    this.studentServ.users.forEach(item=>{
      cols[item.objectId] = item.name;
      datas[item.objectId] = item.exam1;
    })
    this.loadStudentChart(Object.values(cols),Object.values(datas)); 
    
  }
  loadStudentChart(cols,datas){
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('studentChart');
    let el = this.studentChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'Student成绩图'
        },
        tooltip: {},
        legend: {
            data:['成绩']
        },
        xAxis: {
            data: cols
        },
        yAxis: {},
        series: [{
            name: '成绩',
            type: 'bar',
            data: datas
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.chartButton.nativeElement.style.background = "red";
  }

}