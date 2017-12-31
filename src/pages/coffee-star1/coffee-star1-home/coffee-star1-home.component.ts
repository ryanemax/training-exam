import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentService } from '../coffee-star1-data.ts';
import {MatDialog} from '@angular/material';
import {StudentDialogComponent} from '../student-dialog/student-dialog';

interface User {
  id?: number;
  name: string;
  github: string;
  sex: string;
  goods: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-coffee-star1-home',
  templateUrl: './coffee-star1-home.component.html',
  styleUrls: ['./coffee-star1-home.component.scss']
})
export class CoffeeStar1HomeComponent implements OnInit {
    searchText:string;
    selectedUser:any={
      id:666,
      name:"moka",
      sex:"50",
      github:"两颗星",
      goods:"100"
      
    };
    constructor(private http:HttpClient,private studentServ: StudentService,
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
  