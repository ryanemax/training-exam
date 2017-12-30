import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { WsGoodsService } from '../ws-goods-data';
import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';
import { MatDialog} from '@angular/material';
import { WsGoodsDialogComponent} from '../ws-goods-dialog/ws-goods-dialog';

interface Goods{
  goodsNo:string;
  goodsNm:string;
  saleType:number;
  maker:string;
  wsCnt:number;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-ws-goods-list',
  templateUrl: './ws-goods-list.component.html',
  styleUrls: ['./ws-goods-list.component.scss']
})
export class WsGoodsListComponent implements OnInit {

  constructor(private http:HttpClient,private service:WsGoodsService, public dialog: MatDialog) {
    this.service.loadGoodsList();

  }

  openDialog(goods?): void {
    if(!goods){
      goods = {goodsNo:"",goodsNm:""};
    }
    let dialogRef = this.dialog.open(WsGoodsDialogComponent, {
      width: '250px',
      data: goods,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.service.addNewGoods(result);
    });
  }

  ngOnInit(){}
}
