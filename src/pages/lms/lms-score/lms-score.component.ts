import { Component, AfterViewInit,ViewChild} from '@angular/core';
import { LmsStudentService } from '../lms-student.service';

@Component({
  selector: 'app-lms-score',
  templateUrl: './lms-score.component.html',
  styleUrls: ['./lms-score.component.scss']
})
export class LmsScoreComponent implements AfterViewInit {

    // Student List
    scores:Array<any>;
    
  @ViewChild("chartButton") chartButton;  
  @ViewChild("studentChart") studentChart;  
  constructor(private lmsStudentService:LmsStudentService) {

    //this.scores = this.lmsStudentService.getScore();
   }

  ngOnInit() {
  }


  
  showChart(){
    let cols = {}
    let datas = {}
    this.scores.forEach(item=>{
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
    this.lmsStudentService.getScore().subscribe(data=>{
      this.showChart();
    });
  }

}
