import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton1]'
})
export class Button1Directive {
    // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
    // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
 
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
    el.nativeElement.style.fontSize = "18px";
    el.nativeElement.style.margin = "10px";
    el.nativeElement.style.boxShadow = "5px 5px 5px #888888";
    el.nativeElement.style.borderRadius="15px";
  }

}



