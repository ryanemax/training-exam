import { Component, OnInit , AfterViewInit,ViewChild} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatTableDataSource,MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { ItemService } from '../item-data';
import {MatDialog} from '@angular/material';
import {ItemDialogComponent} from '../item-dialog/item-dialog';
import { Observable } from 'rxjs/Observable';
interface Item {
  objectId?:string;
  code: string;
  uom: string;
  description: string;
  count: number;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-inv-home',
  templateUrl: './inv-home.component.html',
  styleUrls: ['./inv-home.component.scss']
})

export class InvHomeComponent implements OnInit,AfterViewInit {
  items: Item[] = this.itemtServ.loadItemsData();
  displayedColumns = ['objectId','code','uom','description','count'];
  dataSource = new MatTableDataSource<Item>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http:HttpClient,private itemtServ:ItemService,public dialog: MatDialog) {

    this.dataSource = new MatTableDataSource();
    this.items = this.itemtServ.loadItemsData();
    //this.dataSource.data = this.itemtServ.items;
   
  }

  ngOnInit() {
  
  }
  ngAfterViewInit() {
    let url = "http://47.92.145.25:80/parse"+"/classes/InvItems";
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
    let options:any ={
      headers:headers
    };
    this.http.get<ParseResponse>(url,options).subscribe(data=>{
      this.dataSource.data = data['results'];
    });
    this.dataSource.sort = this.sort;
  }
  

  openDialog(item?): void {
    if(!item){
      item = {code:"",uom:"",description:"",count:0};
    }
    let dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.itemtServ.addNewItem(result);
    });
  }
}

