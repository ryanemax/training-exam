import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import "rxjs/operators/map";
import { SupplierService } from '../supplier-data';

interface Product {
  name:string,
  price:number
}

interface Supplier {
  id?: number,
  name: string,
  mail: string,
  location: string,
  product: string
}

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  suppliers: Array<Supplier>;
  constructor(private http:Http, private service:SupplierService) { 
    this.service.loadUsersData();
  }

  ngOnInit() {
   var product1:Product = {
      name:"computer",
      price:100
    };
    /*
    this.suppliers = [
      {id: 1,  name: "jack", mail: "ryanemax", location: "male",product:product1},
      {id: 2,  name: "tom", mail: "ryanemax", location: "male",product:product1},
      {id: 3,  name: "black", mail: "ryanemax", location: "male",product:product1},
      {id: 4,  name: "jeson", mail: "ryanemax", location: "male",product:product1}
    ]*/

    //this.loadUsersData();
  }
/*
  loadUsersData() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Supplier";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.suppliers = data.json().results;
    });
  }

  addNewUser() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Supplier";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newUser: Supplier = {
      name: "Tom",
      mail: "Tom_mail",
      location: "jp",
      product: "sap"
    };
    this.http.post(url,newUser,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  deleteUserByID(id) {
    let url = "http://47.92.145.25:80/parse"+"/classes/Supplier"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadUsersData();
    });
  } */

}
