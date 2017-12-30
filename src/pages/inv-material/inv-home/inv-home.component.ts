import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import "rxjs/operators/map";
import { ItemService } from '../item-data';
import {MatDialog} from '@angular/material';
import {ItemDialogComponent} from '../item-dialog/item-dialog';

interface Item {
  code: string,
  uom: string,
  description: string,
  count: number,
  objectId?:string;
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

export class InvHomeComponent implements OnInit {
  items: Array<Item>;
  displayedColumns = [ 'objectId'];

  constructor(private http:HttpClient,private itemtServ:ItemService,public dialog: MatDialog) {
    this.itemtServ.loadItemsData();
  }

  ngOnInit() {
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
