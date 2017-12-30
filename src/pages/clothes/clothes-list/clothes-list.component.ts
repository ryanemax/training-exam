import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ClothesService } from '../clothes-data';
import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

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
    id:666,
    name:"Kingsman",
    birthday:"1202/3/2",
    brand:"sasasa"
   
  };
  foods:any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private http:HttpClient,private clothesServ:ClothesService) {
    this.clothesServ.loadClothesData();
  }
  selectUser(cloth){
    this.selectedClothes = cloth;
  }
  
  ngOnInit() {
  }

}
