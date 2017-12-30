import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EngineeringsMasterService } from '../engineManMaster-data';
import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';
import "rxjs/operators/map";

@Component({
  selector: 'app-engineering-management-home',
  templateUrl: './engineering-management-home.component.html',
  styleUrls: ['./engineering-management-home.component.scss']
})

export class EngineeringManagementHomeComponent implements OnInit {

  constructor(private http: HttpClient, private engineeringsMasterService: EngineeringsMasterService) {
    this.engineeringsMasterService.loadUsersData();
  }

  ngOnInit() {
  }
}
