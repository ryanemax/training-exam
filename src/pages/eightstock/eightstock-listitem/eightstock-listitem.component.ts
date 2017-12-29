import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eightstock-listitem',
  templateUrl: './eightstock-listitem.component.html',
  styleUrls: ['./eightstock-listitem.component.scss']
})
export class EightstockListitemComponent implements OnInit {
  @Input() stock:any = {
    id:0,
    name:'',
    price:0,
    change:0,
    volume:0,
    amount:0,
    marketValue:0
  };
  constructor() { }

  ngOnInit() {
  }

}
