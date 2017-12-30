import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appActWarehouseButton]'
})
export class ActWarehouseButtonDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor = "#E64A19";
    el.nativeElement.style.fontSize = "15px";
    el.nativeElement.style.margin = "15px";
    el.nativeElement.style.boxShadow = "5px 5px 5px #888888";
  }

}
