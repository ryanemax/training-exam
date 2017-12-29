import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eightstock-listitem',
  templateUrl: './eightstock-listitem.component.html',
  styleUrls: ['./eightstock-listitem.component.scss']
})
export class EightstockListitemComponent implements OnInit {
  @Input() stock:any = {
    id:0,
    name:"",
    startPrice:0,
    nowPrice:0,
    minPrice:0,
    maxPrice:0,
    volume:0,
    amount:0,
    marketValue:0,
    circulationValue:0
  };
  constructor() { }

  ngOnInit() {
  }

}
