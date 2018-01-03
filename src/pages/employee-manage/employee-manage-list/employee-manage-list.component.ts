import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { EmployeeService } from '../employee-data';

@Component({
  selector: 'app-employee-manage-list',
  templateUrl: './employee-manage-list.component.html',
  styleUrls: ['./employee-manage-list.component.scss']
})
export class EmployeeManageListComponent implements OnInit {
  employee:any;
  
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
  private studentServ:EmployeeService) {
    this.employee = {
      name:"Unknow Player"
    };
  }
   
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id = params["params"]["id"];
      this.getEmployeeById(id);
    });
    }
  
  
    getEmployeeById(id){
      let url = "http://47.92.145.25:80/parse"+"/classes/Employee12"+"/"+id;
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");
  
      let options:any ={
        headers:headers
      };
  
      this.http.get(url,options).subscribe(data=>{
        this.employee = data;
      });
    }
  }