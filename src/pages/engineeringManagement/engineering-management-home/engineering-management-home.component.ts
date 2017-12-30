import { Component, OnInit } from '@angular/core';

interface EngineeringsMaster {
  id: number,
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

export class EngineeringManagementHomeComponent implements OnInit {

  engineerings: Array<EngineeringsMaster>;
  
  constructor() { 
    this.loadMasterData();
  }

  ngOnInit() {
  }

  loadMasterData(){
    this.engineerings=[
      {id: 1, address:"大连中山区A小区", startDate: "20101001", endDate: "20101031",  personLiable: "张强", status: "完了"},
      {id: 2, address:"大连中山区B小区", startDate: "20161001", endDate: "20161231",  personLiable: "张强", status: "完了"},
      {id: 3, address:"大连中山区C小区", startDate: "20151001", endDate: "20151131",  personLiable: "张强", status: "完了"},
      {id: 4, address:"大连中山区D小区", startDate: "20111001", endDate: "20171031",  personLiable: "张强", status: "完了"},
      {id: 5, address:"大连中山区E小区", startDate: "20171001", endDate: "20171231",  personLiable: "张强", status: "实行中"}
    ]
  }
}
