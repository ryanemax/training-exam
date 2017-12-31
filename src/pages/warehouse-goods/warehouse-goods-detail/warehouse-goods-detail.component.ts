import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warehouse-goods-detail',
  templateUrl: './warehouse-goods-detail.component.html',
  styleUrls: ['./warehouse-goods-detail.component.scss']
})
export class WarehouseGoodsDetailComponent implements OnInit {
  goods:any;

  constructor(private http:HttpClient,
    private route: ActivatedRoute) { }

  getUserById(id){
    let url = "http://47.92.145.25:80/parse"+"/classes/WarehourseGoods"+"/"+id;
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type","application/json").set("X-Parse-Application-Id","dev").set("X-Parse-Master-Key","angulardev");

    let options:any ={
      headers:headers
    };

    this.http.get(url,options).subscribe(data=>{
      console.log(data);
      this.goods = data;
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id = params["params"]["id"];
      this.getUserById(id);
    });
  }

}
