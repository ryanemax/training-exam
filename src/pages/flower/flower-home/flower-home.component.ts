import { Component, OnInit,ViewChild} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FlowerService } from '../flower-data';
//
import {MatDialog} from '@angular/material';
import {FlowerDialogComponent} from '../flower-dialog/flower-dialog';   
//import { FlowerModule } from '../flower.module';

interface Flower{
  id?:number,
  name:string, 
  language:string,
  price:string,
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-flower-home',
  templateUrl: './flower-home.component.html',
  styleUrls: ['./flower-home.component.scss']
})
export class FlowerHomeComponent implements OnInit {
  @ViewChild("studentChart") studentChart;  
  //flowers:Array<Flower>;
  selectedFlower:any={
    id:99,
    name:"鲜花",
    language:"xianhua",
    price:"888",
    img:"/assets/img/bh.jpg"
  };
  Data1:any = ["百合","玫瑰","郁金香","杜鹃","满天星"];
  Data2:any = ["百合1","玫瑰1","郁金香1","杜鹃1","满天星1"];
  showData:any
  constructor(private http:HttpClient,private flowerServ:FlowerService,public dialog: MatDialog) {
    
    this.flowerServ.loadFlowersData();
    this.showData = this.Data1;
  }




  // loadNewChartData(){
  //   this.showData = this.Data2;
  //   this.loadStudentChart();
  // }
  loadStudentChart(){
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('studentChart');
    let el = this.studentChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: this.showData
        },
        yAxis: {},
        series: [{
            name: '价格',
            type: 'bar',
            data: [5, 20, 36,10,29]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  ngAfterViewInit(){
    this.loadStudentChart();    
  }


  /*constructor() { 
    this.loadFlowersData();
  }
  sortUsers(type){
    if (type == 'asc') {
      this.flowers.sort((a,b)=>(a.id-b.id));
    }
    if (type == 'desc') {
      this.flowers.sort((a,b)=>(b.id-a.id));
    }
    if (type == 'random') {
      this.flowers.sort((a,b)=>(Math.random() - 0.5));
    }
    console.log("sortUsers Works!");
  }
  loadFlowersData(){
    this.flowers = [
      {id:1,name:"百合",language:"百年好合",price:"800"},
      {id:2,name:"玫瑰",language:"爱情",price:"2800"},
      {id:3,name:"郁金香",language:"荣誉的皇冠",price:"3000"}
    ];
  }
  addNewFlower(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newFlower:Flower = {
      id:Number(uuid),
      name:"樱花",
      language:"sakura",
      price:"200"
    };
    this.flowers.push(newFlower);
  }
  deleteFlowerByID(id){
    this.flowers.forEach((flower,index,arr)=>{
      if(flower.id===id){
        arr.splice(index,1);
      }
    });
  }*/
  selectFlower(flower){
    this.selectedFlower=flower;
  }
  openDialog(flower?):void{
    if(!flower){
      flower={name:"",language:"",price:"",img:""};
    }
    let dialogRef = this.dialog.open(FlowerDialogComponent, {
      width: '250px',
      data: flower,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.flowerServ.addNewFlower(result);
    });
  }
  ngOnInit() {
  }

}
