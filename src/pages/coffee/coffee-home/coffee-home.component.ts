import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import "rxjs/operators/map";
import { CoffeeService } from '../coffee-data';
// import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

import {MatDialog} from '@angular/material';
import {CoffeeDialogComponent} from '../coffee-dialog/coffee-dialog';


interface Coffee{
  id?:number;
  name:string;
  brand:string;
  colorNumber:string;
  price:number;
  soldNumber:number;
  introduction:string;

  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-coffee-home',
  templateUrl: './coffee-home.component.html',
  styleUrls: ['./coffee-home.component.scss']
})
export class CoffeeHomeComponent implements OnInit {
  coffees:Array<Coffee>;
  searchText:string;
  selectedCoffee:any={
    id:666,
    name:"moka",
    brand:"America",
    colorNumber:"black",
    price:355,
    soldNumber:352541,
  introduction:"好喝"
};

constructor(private http:HttpClient,private coffeeServ:CoffeeService,
  public dialog: MatDialog) {
  this.coffeeServ.loadCoffeesData();
 }

 openDialog(coffee?): void {
  if(!coffee){
    coffee = {name:"",brand:""};
  }
  let dialogRef = this.dialog.open(CoffeeDialogComponent, {
    width: '250px',
    data: coffee,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.coffeeServ.addNewCoffee(result);
  });
}
  ngOnInit() {
  }

}
