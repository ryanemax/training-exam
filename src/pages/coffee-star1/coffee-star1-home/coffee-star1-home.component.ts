import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentService } from '../coffee-star1-data.ts';
import {MatDialog} from '@angular/material';
import "rxjs/operators/map";
import {StudentDialogComponent} from '../student-dialog/student-dialog';


interface User {
  id?: number;
  name: string;
  github: string;
  sex: string;
  goods: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-coffee-star1-home',
  templateUrl: './coffee-star1-home.component.html',
  styleUrls: ['./coffee-star1-home.component.scss']
})
export class CoffeeStar1HomeComponent implements AfterViewInit{
  @ViewChild("coffeeButton") coffeeButton;  
  @ViewChild("coffeeChart") coffeeChart; 
  searchText:string;
    selectedUser:any={
      id:666,
      name:"moka",
      sex:"50",
      github:"两颗星",
      goods:"100"
      
    };
    Data1:any = ["摩卡","黑咖啡","卡布奇诺"];
    Data2:any = ["摩卡2","黑咖啡2","卡布奇诺2"];
    showData:any
    constructor(private http:HttpClient,private studentServ: StudentService,
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
        this.loadCoffeeChart();
      }
      loadCoffeeChart(){
        // 基于准备好的dom，初始化echarts实例
        // let el = document.getElementById('studentChart');
        let el = this.coffeeChart.nativeElement;
        let myChart = echarts.init(el);
    
        // 指定图表的配置项和数据
        let option = {
            title: {
                text: '咖啡列表'
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
                data: [10, 20,30]
            }]
        };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    
      ngAfterViewInit(){
        this.loadCoffeeChart();    
        //this.coffeeButton.nativeElement.style.background = "red";
      }
    
    }
  