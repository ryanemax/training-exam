import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { WsGoodsService } from '../ws-goods-data';
import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';

@Component({
  selector: 'app-ws-goods-list',
  templateUrl: './ws-goods-list.component.html',
  styleUrls: ['./ws-goods-list.component.scss']
})
export class WsGoodsListComponent implements OnInit {

  constructor(private http:HttpClient,private service:WsGoodsService) {
    this.service.loadGoodsList();

  }

  ngOnInit(){}
}
