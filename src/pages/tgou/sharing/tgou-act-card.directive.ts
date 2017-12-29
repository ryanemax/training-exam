import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appActCard]'
})
export class TgouActCardDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.boxShadow = "3px 3px 1px #757575";
    el.nativeElement.onmousedown = ()=>{
      alert("被点击");
    };
  }

}
