import { Component, OnInit } from '@angular/core';

interface Product {
  name:string,
  price:number
}

interface Supplier {
  id: number,
  name: string,
  mail: string,
  location: string,
  product: Product
}

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  suppliers: Array<Supplier>;
  constructor() { }

  ngOnInit() {
   var product1:Product = {
      name:"computer",
      price:100
    };
    this.suppliers = [
      {id: 1,  name: "jack", mail: "ryanemax", location: "male",product:product1},
      {id: 2,  name: "tom", mail: "ryanemax", location: "male",product:product1},
      {id: 3,  name: "black", mail: "ryanemax", location: "male",product:product1},
      {id: 4,  name: "jeson", mail: "ryanemax", location: "male",product:product1}
    ]
  }

  deleteUserByID(id) {
    this.suppliers.forEach((user, index, arr)=> {
      if (user.id == id) {
        arr.splice(index, 1);
      }
    })
  }

}
