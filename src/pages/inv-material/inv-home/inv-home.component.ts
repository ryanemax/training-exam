import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import "rxjs/operators/map";
import { ItemService } from '../item-data';
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

  constructor(private http:HttpClient,private itemtServ:ItemService) {
    this.itemtServ.loadItemsData();
  }

  ngOnInit() {
  }


}
