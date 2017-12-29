import { Component, OnInit } from '@angular/core';
import { Input } from '../../../../node_modules/_@angular_core@5.0.0@@angular/core/src/metadata/directives';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
