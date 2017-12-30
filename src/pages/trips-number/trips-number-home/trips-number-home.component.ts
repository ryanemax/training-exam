import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { StudentService } from '../bus-data';

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
  constructor(private studentServ:StudentService) {
    this.studentServ.loadUsersData();
  }
  selectUser(user){
    this.selectedUser = user;
  }

  ngOnInit() {
  }

}
