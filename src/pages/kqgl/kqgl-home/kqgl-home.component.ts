import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {KqglDialogComponent} from '../kqgl-dialog/kqgl-dialog';

import {KqglService} from '../kqgl-data';

interface User {
  id?: number;
  name: string;
  cq: string;
  qq: string;
  dksj: string;
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}

@Component({
  selector: 'app-kqgl-home',
  templateUrl: './kqgl-home.component.html',
  styleUrls: ['./kqgl-home.component.scss']
})
export class KqglHomeComponent implements OnInit {
  users: Array<User>;
  selectedUser:User={
    id:666,
    name:"Kingsman",
    cq:"1",
    qq:"0",
    dksj:"20171212 08:12:25"
  };
  constructor(private http:HttpClient,private kqglServ:KqglService,
    public dialog: MatDialog) {

    this.kqglServ.loadUsersData();
   }

  ngOnInit() {
  }
  selectUser(user){
    this.selectedUser = user;
  }
  openDialog(user?): void {
    if(!user){
      user = {name:"",github:""};
    }
    let dialogRef = this.dialog.open(KqglDialogComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.kqglServ.addNewUser(result);
    });
  }
 

  
}
