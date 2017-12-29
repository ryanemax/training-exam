import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMarketIndexColor]'
})
export class MarketIndexColorDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
  }

}
