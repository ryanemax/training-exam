import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ws-good-list-item',
  templateUrl: './ws-good-list-item.component.html',
  styleUrls: ['./ws-good-list-item.component.scss']
})
export class WsGoodListItemComponent implements OnInit {

  @Input() goods:any = {
    goods_no : "",
    goods_nm : "",
    sale_type : 1,
    maker : "",
    wsCnt : 0
  };
  constructor() { }

  ngOnInit() {
  }

}
