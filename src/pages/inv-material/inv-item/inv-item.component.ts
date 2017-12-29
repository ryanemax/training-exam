import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-inv-item',
  templateUrl: './inv-item.component.html',
  styleUrls: ['./inv-item.component.scss']
})
export class InvItemComponent implements OnInit {
  @Input() item:any = {
    id:777,
    uom: "Kg",
    code:"XXY",
    description:"item01",
    count: 100

  };
  constructor() { }
  ngOnInit() {
  }
  deleteById(){
    alert("恭喜您，删除成功");
  }
}
