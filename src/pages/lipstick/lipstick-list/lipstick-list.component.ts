import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LipStickService } from '../lipstick-data';
import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

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
  constructor(private http:HttpClient,private lipstickServ:LipStickService) {
    this.lipstickServ.loadLipsticksData();
  }
  selectLipsticks(lipstick){
    this.selectedlipsticks = lipstick;
  }
  ngOnInit() {
  }

}
