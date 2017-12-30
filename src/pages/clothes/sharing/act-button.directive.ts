import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appActButton]'
})
export class ActButtonDirective {
    // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
    // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
 
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
    el.nativeElement.style.fontSize = "28px";
    el.nativeElement.style.margin = "5px";
    el.nativeElement.style.boxShadow = "10px 10px 5px #888888";
    el.nativeElement.innerHTML = "<span>X</span>";
  }

}
