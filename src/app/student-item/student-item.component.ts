import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() user:any = {
    id:666,
    name:"Kingsman",
    sex:"male",
    github:"kingsman",
    count:"0"
  };
  birthday:Date = new Date(1988, 3, 15); 
  constructor() { }

  showSexName(sex){
    if(sex=='male'){
      return "男"
    }
    if(sex=='female'){
      return "女"
    }
  }
  deleteById(){
    alert("恭喜您，删除成功");
  }
  ngOnInit() {
  }

}
