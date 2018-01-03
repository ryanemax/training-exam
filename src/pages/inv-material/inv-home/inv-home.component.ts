import { Component, OnInit , AfterViewInit,ViewChild,} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatTableDataSource, MatSort,MatPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { ItemService } from '../services/item-data';
import {MatDialog} from '@angular/material';
import {ItemDialogComponent} from '../item-dialog/item-dialog';
import { Observable } from 'rxjs/Observable';
import {Item} from '../models/item-model';
import {PageEvent} from '@angular/material';

interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-inv-home',
  templateUrl: './inv-home.component.html',
  styleUrls: ['./inv-home.component.scss']
})

export class InvHomeComponent implements OnInit,AfterViewInit {
  items: Array<any>;
  itemCodes : Array<any> = new Array();
  itemCounts : Array<any> = new Array();
  displayedColumns = ['code','uom','description','count','operation'];
  dataSource : MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("itemChart") itemChart; 
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  showCode :any;
  showCount :any;
  // MatPaginator Output
  pageEvent: PageEvent;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(private http:HttpClient,private itemtServ:ItemService,public dialog: MatDialog) {
  }
  
  getItemCodeCount(){
    this.itemCodes = [];
    this.itemCounts = [];
  this.items.forEach((item, i)=>{
    //console.log("bbbbb");
    this.itemCodes.push(item["code"]);
    this.itemCounts.push(item["count"]);
    //this.itemCounts.push(1000);
    
  })

  }
  loadItemChart(){
    let el = this.itemChart.nativeElement;
    let myChart = echarts.init(el);
    this.showCount = this.showCount
    this.showCode = this.itemCodes;

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: '物料库存分析'
        },
        tooltip: {},
        legend: {
            data:['库存量']
        },
        xAxis: {
            data: this.itemCodes
        },
        yAxis: {},
        series: [{
            name: '库存量',
            type: 'bar',
            data: this.itemCounts
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  deleteItemByID(id){
   this.itemtServ.deleteItemByID(id).subscribe(data=>{
    this.loadItems();
   }
  );

  }
  loadItems(){
    this.itemtServ.getItems().subscribe(data=>{
      this.items = data["results"];
      this.dataSource = new MatTableDataSource<Item>();
      this.dataSource.data = this.items;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.getItemCodeCount();
      this.loadItemChart();
  });
  }
  ngOnInit() {

  this.loadItems();
    
  }
  ngAfterViewInit() {
    //this.loadItems();
    //this.loadItemChart();
    // this.dataSource.data = [
    //   {"objectId":"aaa","code":"aa","uom":"","description":"","count":0}
    // ];

  }
  

  openDialog(item?): void {
    if(!item){
      item = {code:"",uom:"",description:"",count:"0"};
    }
    let dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.itemtServ.addNewItem(result).subscribe(data =>{
         this.loadItems();
      });;
    });
  }
}

