import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import "rxjs/operators/map";
import { WarehouseGoodsService } from '../warehouse-goods-data';

interface Goods{
  objectid?:string,
  name:string,
  detailName:string,
  address:string
}
interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-warehouse-goods-home',
  templateUrl: './warehouse-goods-home.component.html',
  styleUrls: ['./warehouse-goods-home.component.scss']
})
export class WarehouseGoodsHomeComponent implements OnInit {

  
  constructor(private wgServ:WarehouseGoodsService) {
    this.wgServ.loadUsersData();
  }
  
  ngOnInit() {
  }

}
