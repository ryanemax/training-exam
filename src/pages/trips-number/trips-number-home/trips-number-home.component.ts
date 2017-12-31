import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";

interface Bus {
  id?: number;
  name: string;
  count: number;
}
interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-trips-number-home',
  templateUrl: './trips-number-home.component.html',
  styleUrls: ['./trips-number-home.component.scss']
})
export class TripsNumberHomeComponent implements OnInit {
  buses: Array<Bus>;
  searchText:string;
  selectedUser:any={
    id:666,
    name:"Kingsman",
    count:"0"
  };
  constructor() {
    //this.studentServ.loadUsersData();
  }
  selectUser(user){
    this.selectedUser = user;
  }

  ngOnInit() {
  }

}
