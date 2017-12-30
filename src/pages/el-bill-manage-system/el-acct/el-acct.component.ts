import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';

interface Account {
  acctId: String,
  name: String,
  address: String,
  meterNum: Number,
}

@Component({
  selector: 'app-el-acct',
  templateUrl: './el-acct.component.html',
  styleUrls: ['./el-acct.component.scss']
})
export class ElAcctComponent implements OnInit {

  account: Array<Account>;
    
  constructor() { 
    this.loadUsersData();
  }

  loadUsersData() {
    this.account = [
      {acctId: "20170001", name: "Jack", address: "OneStreet702-1", meterNum: 95},
      {acctId: "20170002", name: "Rose", address: "OneStreet702-4", meterNum: 85},
      {acctId: "20170003", name: "Kobe", address: "OneStreet702-2", meterNum: 156},
      {acctId: "20170004", name: "Vanish", address: "OneStreet702-3", meterNum: 55},
    ];
  }

  addNewAccount() {
    let acctid = Number(Math.random() * 1000).toFixed(0);
    let newacctount: Account = {
      acctId: acctid,
      name: this.getName(),
      address: this.getAddress(),
      meterNum: this.getMeter(),
    }
    this.account.push(newacctount);
  }

  deleteUserByID(id) {
    this.account.forEach((account, index, arr)=> {
      if (account.acctId == id) {
        arr.splice(index, 1);
      }
    })
  }

  getName() {

    let name:String;

    let words = ["a","b","c","d","e","f","g","i","o","u"];
    let indexArr:Array<Number>;

    let i:number;
    for (i = 1; i < 7; i++) {
      let idx = (Math.random() * 10).toFixed(0);
      name = name + words[idx];
    }

    name.charAt(0).toUpperCase;

    return name;
  }

  getAddress() {
    return "OneStreet702" + (Math.random() * 10).toFixed(0) + "1";
  }

  getMeter() {
    let meter = Number((Math.random() * 100).toFixed(0));
    return (meter > 0 ? meter : 1);
  }

  ngOnInit() {
  }

}
