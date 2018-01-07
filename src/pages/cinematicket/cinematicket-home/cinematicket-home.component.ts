import { Component, AfterViewInit ,ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
import { HttpHandler } from '@angular/common/http/src/backend';
import { CinemaService } from '../cinematicket-data';
import { CinematicketDialogComponent } from '../cinematicket-dialog/cinematicket-dialog.component';
import { MatDialog } from '@angular/material';
interface Cinema {
  objectId?: number;
  name: string;
  counts: number;
  github: string;
}

interface ParseResponse {
  results: any;
}
@Component({
  selector: 'app-cinematicket-home',
  templateUrl: './cinematicket-home.component.html',
  styleUrls: ['./cinematicket-home.component.scss'],
})
export class CinematicketHomeComponent implements AfterViewInit {
  cinemas: Array<Cinema>;
  @ViewChild("cinemaChart") cinemaChart;  
  constructor(private http: HttpClient, private cinemaServ: CinemaService, public dialog: MatDialog) {

  }
  ngOnInit() {
  }

  openDialog(cinema?): void {
    if (!cinema) {
      cinema = { name: "" };
    }
    let dialogRef = this.dialog.open(CinematicketDialogComponent, {
      width: '250px',
      data: cinema,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result!=undefined){
        if (!result.objectId) {
          this.cinemaServ.addNewCinema(result);
        } else {
          this.cinemaServ.updateCinema(result);
        }
        setTimeout(() => {
          this.showChart();
         }, 300);
      }
     
    });
  }
  showChart(){
  let cols={}
    let datas = {}
    this.cinemaServ.cinemas.forEach(item=>{
      cols[item.objectId] = item.name;
      datas[item.objectId] = item.counts;
    })
    this.loadCinemaChart(Object.values(cols),Object.values(datas)); 
    
  }
  loadCinemaChart(cols,datas){
    // 基于准备好的dom，初始化echarts实例
    // let el = document.getElementById('studentChart');
    let el = this.cinemaChart.nativeElement;
    let myChart = echarts.init(el);

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: '电影图表'
        },
        tooltip: {},
        legend: {
            data:['票数']
        },
        xAxis: {
            data: cols
        },
        yAxis: {},
        series: [{
            name: '票数',
            type: 'bar',
            data: datas
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  ngAfterViewInit() {
    this.cinemaServ.loadCinemaData()
     setTimeout(() => {
      this.showChart();
     }, 300);
  }

}