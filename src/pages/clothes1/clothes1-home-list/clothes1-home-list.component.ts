import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Clothes1Service } from '../clothes1-data';
// import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';
import {MatDialog} from '@angular/material';
import {Clothes1DialogComponent} from '../clothes1-dialog/clothes1-dialog';


interface Clothes1 {
  id?: number;
  name: string;
  price: number;
  count: number;
  img:string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-clothes1-home-list',
  templateUrl: './clothes1-home-list.component.html',
  styleUrls: ['./clothes1-home-list.component.scss']
})
export class Clothes1HomeListComponent implements OnInit {
  searchText:string;
  selectedClothes1:any={
    id:666,
    name:"Jack",
    price:200,
    count:10,
    img:"/assets/img/timg.jpg"
  };

  constructor(private http:HttpClient,private clothes1Serv:Clothes1Service,
    public dialog: MatDialog) {
      this.clothes1Serv.loadClothes1Data();
    }
    selectClothes1(clothes1){
      this.selectedClothes1 = clothes1;
    }
    openDialog(clothes1?): void {
      if(!clothes1){
        clothes1 = {name:"",price:"",count:""};
      }
      let dialogRef = this.dialog.open(Clothes1DialogComponent, {
        width: '250px',
        data: clothes1,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clothes1Serv.addNewClothes1(result);
      });
    }
    ngOnInit() {
    }
  
  }