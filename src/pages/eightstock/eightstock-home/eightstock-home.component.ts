import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import "rxjs/operators/map";
import { EightstockNewschatComponent } from '../eightstock-newschat/eightstock-newschat.component';


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
interface StockNews {
  objectId?: number,
  title: string,
  content: string,
  imagePath: string,
  chatNum: number,
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
  selectedStocks: Array<Stock> = [];
  marketIndexes: Array<MarketIndex>;
  stockNewsList: Array<StockNews>;
  tabNo: number;
  sortType: String;
  sortMode: number;

  constructor(private http: Http, public dialog: MatDialog) {
    this.initLoad();
    this.tabNo = 1;
    this.sortType = '';
    this.sortMode = 1;
  }

  initLoad() {
    this.marketIndexes = [
      { id: 1, name: "上证指数", price: 3301, percent: 4.09, total: 1523.4 },
      { id: 2, name: "深证成指", price: 7589, percent: 3.09, total: 3023.9 },
      { id: 3, name: "创业板指", price: 1748, percent: -1.09, total: 567.6 }
    ];
    this.getStockList();
    this.getStockNews();
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

  getStockNews() {
    this.http.get(url + "/classes/EStockNews", options).subscribe(data => {
      this.stockNewsList = data.json().results;
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
    }
    if (type == 'name') {
      sortStock.sort((a, b) => (this.sortMode * (a.name.localeCompare(b.name))));
    }
    if (type == 'startPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.startPrice - b.startPrice)));
    }
    if (type == 'nowPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.nowPrice - b.nowPrice)));
    }
    if (type == 'change') {
      sortStock.sort((a, b) => (this.sortMode * ((a.nowPrice - a.startPrice) - (b.nowPrice - b.startPrice))));
    }
    if (type == 'minPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.minPrice - b.minPrice)));
    }
    if (type == 'maxPrice') {
      sortStock.sort((a, b) => (this.sortMode * (a.maxPrice - b.maxPrice)));
    }
    if (type == 'volume') {
      sortStock.sort((a, b) => (this.sortMode * (a.volume - b.volume)));
    }
    if (type == 'amount') {
      sortStock.sort((a, b) => (this.sortMode * (a.amount - b.amount)));
    }
    if (type == 'marketValue') {
      sortStock.sort((a, b) => (this.sortMode * (a.marketValue - b.marketValue)));
    }
    if (type == 'circulationValue') {
      sortStock.sort((a, b) => (this.sortMode * (a.circulationValue - b.circulationValue)));
    }
    this.sortMode = this.sortMode * -1;
  }

  ngOnInit() {
  }

  openDialog(stockNews): void {
    let dialogRef = this.dialog.open(EightstockNewschatComponent, {
      width: '600px',
      data: {
        newsId: stockNews.objectId,
        title: stockNews.title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
