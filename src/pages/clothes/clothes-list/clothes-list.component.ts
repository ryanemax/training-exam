import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ClothesService } from '../clothes-data';
import {ClothesDialogComponent} from '../clothes-dialog/clothes-dialog';
import { MatDialog } from '@angular/material';

interface Clothes {
  id?: number;
  name: string;
  brand: string;
  birthday:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {
  
  searchText:string;
  selectedClothes:any={
    id:111,
    name:"Kingsman",
    birthday:"1202/3/2",
    brand:"sasasa"
   
  };
  foods:any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private http:HttpClient,private clothesServ:ClothesService, public dialog: MatDialog) {
    this.clothesServ.loadClothesData();
  }
  selectUser(cloth){
    this.selectedClothes = cloth;
  }
  openDialog(cloth?): void {
    if(!cloth){
      cloth = {name:"",brand:""};
    }
    let dialogRef = this.dialog.open(ClothesDialogComponent, {
      width: '250px',
      data: cloth,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clothesServ.addNewClothes(result);
    });
  }
  ngOnInit() {
  }

}
