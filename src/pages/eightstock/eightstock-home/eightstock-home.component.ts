import { Component, OnInit, ElementRef } from '@angular/core';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";
import { forEach } from '../../../../node_modules/_@angular_router@5.0.0@@angular/router/src/utils/collection';

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
  circulationValue: number,
  selected: boolean
}
interface MarketIndex {
  id: number,
  name: string,
  price: number,
  percent: number
  total: number
}
let url = "http://47.92.145.25:80/parse";
let headers: Headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("X-Parse-Application-Id", "dev");
headers.append("X-Parse-Master-Key", "angulardev");
let options = { headers: headers };

@Component({
  selector: 'app-eightstock-home',
  templateUrl: './eightstock-home.component.html',
  styleUrls: ['./eightstock-home.component.scss']
})
export class EightstockHomeComponent implements OnInit {

  stocks: Array<Stock>;
  selectedStocks: Array<Stock>=[];
  marketIndexes: Array<MarketIndex>;
  tabNo: number;
  sortType: String;
  sortMode: number;

  constructor(private http: Http) {
    this.initLoad();
    this.tabNo = 1;
    this.sortType = '';
    this.sortMode = 1;
  }

  initLoad() {
    this.marketIndexes = [
      { id: 1, name: "上证指数", price: 3301, percent: 4.09, total: 1523.4 },
      { id: 2, name: "深证成指", price: 7589, percent: 13.09, total: 3023.9 },
      { id: 3, name: "创业板指", price: 1748, percent: -1.09, total: 567.6 }
    ];
    this.getStockList();
  }

  getStockList() {
    this.http.get(url + "/classes/EStock", options).subscribe(data => {
      this.stocks = data.json().results;
      this.stocks.forEach(stock => {
        if (stock.selected) {
          this.selectedStocks.push(stock);
        }
      })
    });
  }

  sortStock(type, isSelected) {
    let sortStock = this.stocks;
    if (isSelected) {
      sortStock = this.selectedStocks;
    }

    if (this.sortType != type) {
      this.sortMode = 1;
    }

    this.sortType = type;
    if (type == 'id') {
      sortStock.sort((a, b) => (this.sortMode * (a.stockNo - b.stockNo)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'name') {
      sortStock.sort((a, b) => (this.sortMode * (a.name.localeCompare(b.name))));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'startPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.startPrice - b.startPrice)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'nowPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.nowPrice - b.nowPrice)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'change') {
      sortStock.sort((a, b) => (this.sortMode * ((a.nowPrice - a.startPrice) - (b.nowPrice - b.startPrice))));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'minPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.minPrice - b.minPrice)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'maxPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.maxPrice - b.maxPrice)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'volume') {
      sortStock.sort((a, b) => (this.sortMode * (a.volume - b.volume)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'amount') {
      sortStock.sort((a, b) => (this.sortMode * (a.amount - b.amount)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'marketValue') {
      sortStock.sort((a, b) => (this.sortMode * (a.marketValue - b.marketValue)));
      this.sortMode = this.sortMode * -1;
    }
    if (type == 'circulationValue') {
      sortStock.sort((a, b) => (this.sortMode * (a.circulationValue - b.circulationValue)));
      this.sortMode = this.sortMode * -1;
    }
  }

  ngOnInit() {
  }

}
