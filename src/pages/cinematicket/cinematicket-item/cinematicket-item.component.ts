import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinematicket-item',
  templateUrl: './cinematicket-item.component.html',
  styleUrls: ['./cinematicket-item.component.scss']
})
export class CinematicketItemComponent implements OnInit {
  cinema: any = {
    id:1,
    name:"null",
    count:100
  }
  constructor() {}

  ngOnInit() {
  }

}
