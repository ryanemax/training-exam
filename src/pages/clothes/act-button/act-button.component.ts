import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-act-button',
  templateUrl: './act-button.component.html',
  styleUrls: ['./act-button.component.scss']
})
export class ActButtonComponent implements OnInit {

  @Input() name:string;

  constructor() {}

  ngOnInit() {
  }

}
