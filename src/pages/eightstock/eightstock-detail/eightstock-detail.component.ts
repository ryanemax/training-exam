import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import "rxjs/operators/map";

let url = "http://47.92.145.25:80/parse";
let headers: Headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("X-Parse-Application-Id", "dev");
headers.append("X-Parse-Master-Key", "angulardev");
let options = { headers: headers };

@Component({
  selector: 'app-eightstock-detail',
  templateUrl: './eightstock-detail.component.html',
  styleUrls: ['./eightstock-detail.component.scss']
})


export class EightstockDetailComponent implements OnInit {
  stockd: any;
  constructor(private route: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params["params"]["id"];
      this.getStockById(id);
    });

  }

  getStockById(id) {

    this.http.get(url + "/classes/EStock" + "/" + id, options).subscribe(data => {
      this.stockd = data.json();
      // console.log(this.stockd);
    });
  }
}
