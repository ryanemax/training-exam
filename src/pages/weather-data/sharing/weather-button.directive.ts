import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appWeatherButton]'
})
export class WeatherButtonDirective {

    // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
    // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
 
    constructor(el:ElementRef) {

      el.nativeElement.style.backgroundColor = "primary";
      el.nativeElement.style.fontSize = "12px";
      el.nativeElement.style.margin = "15px";
      el.nativeElement.style.boxShadow = "1px 1px 5px #888888";
    }

}
