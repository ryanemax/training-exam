import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EngineeringsMasterService } from '../engineManMaster-data';

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
