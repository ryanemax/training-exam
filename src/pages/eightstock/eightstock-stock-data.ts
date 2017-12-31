import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Stock {
  objectId?: number,
  stockNo: number,
  name: string,
  startPrice: number,
  nowPrice: number,
  minPrice: number,
  maxPrice: number,
  volume: number,
  amount: number,
  marketValue: number
  circulationValue: number
}

interface ParseResponse {
  results: any[];
}

@Injectable()
export class StockService {

  users: any[];
  constructor(private http: HttpClient) {
  }
  loadStockData(type) {
    let url = "http://47.92.145.25:80/parse" + "/classes/EStock";
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options: any = {
      headers: headers
    };
    return this.http.get<ParseResponse>(url, options).subscribe(data => {
      this.users = data['results'];
      console.log(this.users);
    });
  }

  updateSelectStatusById(id) {
    let url = "http://47.92.145.25:80/parse" + "/classes/EStock" + "/" + id;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options = {
      headers: headers
    };
  }
}