import { Component,OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { WarehouseGoodsAddupdDialogComponent } from '../warehouse-goods-dialog/warehouse-goods-addupd';
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

  constructor(private wgServ:WarehouseGoodsService,public dialog: MatDialog) {
      this.wgServ.loadUsersData();
    }

  openDialog(goods?): void {
    if(!goods){
      goods = {name:"",detailName:"",address:""};
    }
    let dialogRef = this.dialog.open(WarehouseGoodsAddupdDialogComponent, {
      width: '250px',
      data: goods,
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
      this.wgServ.addNewUser(result);
      }
    });
  }

  ngOnInit() {}
}
