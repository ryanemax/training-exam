import {Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentService } from '../student-data';
// 

import {MatDialog} from '@angular/material';
import {StudentDialogComponent} from '../student-dialog/student-dialog';

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

  constructor(private http:HttpClient,private studentServ:StudentService,
  public dialog: MatDialog) {
    this.studentServ.loadUsersData();
  }
  selectUser(user){
    this.selectedUser = user;
  }
  openDialog(user?): void {
    if(!user){
      user = {name:"",github:""};
    }
    let dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.studentServ.addNewUser(result);
    });
  }
  ngOnInit() {
  }

}