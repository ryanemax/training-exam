import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clothes1-home-item',
  templateUrl: './clothes1-home-item.component.html',
  styleUrls: ['./clothes1-home-item.component.scss']
})
export class Clothes1HomeItemComponent implements OnInit {
  @Input() cloth:any = {
    id:666,
    name:"Kingsman",
    price:120,
    
    count:"200"
  };
   
  constructor() { }

  
  deleteById(){
    alert("恭喜您，删除成功");
  }
  ngOnInit() {
  }

}
