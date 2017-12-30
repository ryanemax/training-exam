import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentService } from '../student-data';
// import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

interface User {
  id?: number;
  name: string;
  github: string;
  sex: string;
  count: number;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

interface ParseResponse {
  results: any[];
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  searchText:string;
  selectedUser:any={
    id:666,
    name:"Kingsman",
    sex:"male",
    github:"kingsman",
    count:"0"
  };

  constructor(private http:HttpClient,private studentServ:StudentService) {
    this.studentServ.loadUsersData();
  }
  selectUser(user){
    this.selectedUser = user;
  }
  ngOnInit() {
  }

}
