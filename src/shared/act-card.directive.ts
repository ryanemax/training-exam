import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appActCard]'
})
export class ActCardDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.boxShadow = "3px 3px 1px #888888";
    el.nativeElement.onkeydown = ()=>{
      alert("卡片被点击");
    };
  }

}
