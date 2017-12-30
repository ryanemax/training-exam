import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appInvButton]'
})
export class InvButtonDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "#2D7BBB";
    el.nativeElement.style.fontSize = "18px";
    el.nativeElement.style.color = "#FFF";
    el.nativeElement.style.boxShadow = "0 0 0 1px rgba(0,0,0,.05) inset";

  }

}
