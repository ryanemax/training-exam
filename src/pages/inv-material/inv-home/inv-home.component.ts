import { Component, OnInit , AfterViewInit,ViewChild,AfterContentInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatTableDataSource,MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { ItemService } from '../services/item-data';
import {MatDialog} from '@angular/material';
import {ItemDialogComponent} from '../item-dialog/item-dialog';
import { Observable } from 'rxjs/Observable';
import {Item} from '../models/item-model';

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
  //dataSource = new MatTableDataSource<Item>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http:HttpClient,private itemtServ:ItemService,public dialog: MatDialog) {

<<<<<<< HEAD
    this.items = this.itemtServ.loadItemsData();

   
=======
  let options:any ={
    headers:headers
  };
  
>>>>>>> bdbd39da5c0c567ab6ae973e9dededea3dd898f2
  }

  ngOnInit() {
  
  }
  ngAfterViewInit() {
    this.items = this.itemtServ.loadItemsData();
    //this.dataSource = this.itemtServ.dataSource;
    // this.dataSource.data = [
    //   {"objectId":"aaa","code":"aa","uom":"","description":"","count":0}
    // ];
   // this.dataSource.sort = this.sort;
  }
  

  openDialog(item?): void {
    if(!item){
      item = {code:"",uom:"",description:"",count:0};
    }
    let dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.itemtServ.addNewItem(result);
    });
  }
}

