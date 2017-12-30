import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-tgou-item',
  templateUrl: './tgou-item.component.html',
  styleUrls: ['./tgou-item.component.scss']
})
export class TgouItemComponent implements OnInit {

  user: any;
  constructor(private route: ActivatedRoute,
    private http: HttpClient) {
    this.user = {
      name: "Unknow"
    };
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params["params"]["id"];
      this.getUserById(id);
    });
  }

  getUserById(id) {
    let url = "http://47.92.145.25:80/parse" + "/classes/TGoods" + "/" + id;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options: any = {
      headers: headers
    };

    this.http.get(url, options).subscribe(data => {
      this.user = data;
    });
  }
}
