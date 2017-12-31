import {Component,OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {MatDialog} from '@angular/material';
import {KqglDialogComponent} from '../kqgl-dialog/kqgl-dialog';
import {KqglService} from '../kqgl-data';

interface User {
  id?: number;
  name: string;
  cq: string;
  qq: string;
  dksj: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-kqgl-home',
  templateUrl: './kqgl-home.component.html',
  styleUrls: ['./kqgl-home.component.scss']
})
export class KqglHomeComponent implements OnInit {
  @ViewChild("studentChart") studentChart;  

  searchName:string = "";
  users: Array<User>;
  selectedUser:User={
    id:666,
    name:"Kingsman",
    cq:"1",
    qq:"0",
    dksj:"20171212 08:12:25"
  };

  Data1:any 
  Data2:any 
  showData:any

  constructor(private http:HttpClient,private kqglServ:KqglService,
    public dialog: MatDialog) {

    this.kqglServ.loadUsersData();

    // this.users.forEach((user,index,arr)=>{
    //   this.Data1.push(user.cq);
    // })

    this.Data1 = ["12/10","12/11","12/12","12/13","12/14","12/15"];
    this.Data2 = [5, 20, 36, 10, 10, 20];
   }

  ngOnInit() {
  }
  selectUser(user){
    this.selectedUser = user;
  }
  openDialog(user?): void {
    if(!user){
      user = {name:"",cq:""};
    }
    let dialogRef = this.dialog.open(KqglDialogComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.kqglServ.addNewUser(result);
    });
  }
 
  loadNewChartData(){


    this.loadStudentChart(this.Data1,this.Data2);
  }

  loadStudentChart(cols,datas){
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('studentChart');
    let el = this.studentChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: '考勤图表'
        },
        tooltip: {},
        legend: {
            data:['出勤人数']
        },
        xAxis: {
            data: cols
        },
        yAxis: {},
        series: [{
            name: '出勤人数',
            type: 'bar',
            data: datas
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.loadStudentChart(this.Data1,this.Data2);    

  }

}
