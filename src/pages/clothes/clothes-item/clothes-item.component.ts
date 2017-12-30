import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clothes-item',
  templateUrl: './clothes-item.component.html',
  styleUrls: ['./clothes-item.component.scss']
})
export class ClothesItemComponent implements OnInit {
  @Input() cloth:any = {
    id:666,
   
  };
  birthday:Date  = new Date(1988, 3, 15);
  constructor() { }

  
 
  ngOnInit() {
  }

}
