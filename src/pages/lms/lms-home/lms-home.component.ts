import { Component, OnInit } from '@angular/core';

interface User {
  id: number,
  name: string,
  sex: string,
  score: number
}

@Component({
  selector: 'app-lms-home',
  templateUrl: './lms-home.component.html',
  styleUrls: ['./lms-home.component.scss']
})
export class LmsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
}
