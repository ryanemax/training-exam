import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  constructor() { }
  @Input() book:any = {
    id:666,
    name:"Kingsman",
    cycle:"male",
    price:"kingsman",
    status:"0"
  };

  // showSexName(sex){
  //   if(sex=='male'){
  //     return "男"
  //   }
  //   if(sex=='female'){
  //     return "女"
  //   }
  // }
  deleteById(){
    alert("恭喜您，删除成功");
  }

  ngOnInit() {
  }

}
