import { Component, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EngineeringsMasterService } from '../engineManMaster-data';
import { MatDialog } from '@angular/material';
import { EngineeringManagementDialogComponent } from '../engineering-management-dialog/engineering-management-dialog.component';

import "rxjs/operators/map";



interface EngineeringsMaster {
  check?: boolean,
  objectId?: string,
  no: number,
  address: string,
  startDate: string,
  endDate: string,
  personLiable: string,
  status: string
}
@Component({
  selector: 'app-engineering-management-home',
  templateUrl: './engineering-management-home.component.html',
  styleUrls: ['./engineering-management-home.component.scss']
})
export class EngineeringManagementHomeComponent {

  constructor(private http: HttpClient, private engineeringsMasterService: EngineeringsMasterService, public dialog: MatDialog) {
    this.engineeringsMasterService.loadUsersData();
  }
  setDate(ev){
    console.log(ev);
    let date = ev.value;
  }
  openDialog(user?): void {
    if (!user) {
      user = { name: "", github: "" };
    }
    let dialogRef = this.dialog.open(EngineeringManagementDialogComponent, {
      width: '500px',
      height: '500px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.engineeringsMasterService.addData(result);
    });
  }

}
