import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LipStickService } from '../lipstick-data';

import {MatDialog} from '@angular/material';
import {LipstickDialogComponent} from '../lipstick-dialog/lipstick-dialog';

interface Lipstick{
  id?:number;
  name:string;
  brand:string;
  colorNumber:string;
  price:number;
  soldNumber:number;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-lipstick-list',
  templateUrl: './lipstick-list.component.html',
  styleUrls: ['./lipstick-list.component.scss']
})
export class LipstickListComponent implements OnInit {
  lipsticks:Array<Lipstick>;
    selectedlipsticks:any={
      id:666,
      name:"纪梵希小羊皮",
      brand:"纪梵希 GIVENCHY",
      colorNumber:"N306法式红",
      price:355,
      soldNumber:352541
  };
  foods:any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private http:HttpClient,private lipstickServ:LipStickService,
    public dialog: MatDialog) {
      this.lipstickServ.loadLipsticksData();
  }
  selectLipsticks(lipstick){
    this.selectedlipsticks = lipstick;
  }
  openDialog(lipstick?): void {
    if(!lipstick){
      lipstick = {objectId:"",name:"",brand:"",colorNumber:"",price:null,soldNumber:null};
    }
    let dialogRef = this.dialog.open(LipstickDialogComponent, {
      width: '300px',
      data: lipstick,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
          this.lipstickServ.addNewLipstick(result);
      }
    });
  }
  ngOnInit() {
  }

}
