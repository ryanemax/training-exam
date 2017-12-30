import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book:any = {
    bookID:68498,
    name:"物理",
    author:"阿迪锅",
    date:"new Date(1985,2,3)",
    sale:"846"
  };
  birthday:Date = new Date(1988, 3, 15); 
  constructor() { }

  
  deleteById(){
    alert("恭喜您，删除成功");
  }
  ngOnInit() {
  }

}
