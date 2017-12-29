import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appInvButton]'
})
export class InvButtonDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "#0288D1";
    el.nativeElement.style.fontSize = "18px";
    el.nativeElement.style.boxShadow = "10px 10px 5px #888888";

  }

}
