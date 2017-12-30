import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
=======
import { Http, Headers } from '@angular/http';
import { StudentService } from '../bus-data';
>>>>>>> 264e51943d6a5bd69fbebd478131a400119938c0

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
