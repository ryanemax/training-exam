import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-employee-manage-home',
  templateUrl: './employee-manage-home.component.html',
  styleUrls: ['./employee-manage-home.component.scss']
})
export class EmployeeManageHomeComponent implements OnInit {
   @Input() employee:any = {
   id:666,
   name:"Kingsman",
   sex:"male",
   dept:"管理",
   }
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
