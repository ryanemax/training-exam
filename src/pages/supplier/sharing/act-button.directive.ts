import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appActButton]'
})
export class ActButtonDirective {
    
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "blue";
    el.nativeElement.style.fontSize = "15px";
    el.nativeElement.style.margin = "5px";
    //el.nativeElement.style.boxShadow = "10px 10px 5px #888888";
    el.nativeElement.innerHTML = "<span></span>";
  }

}
