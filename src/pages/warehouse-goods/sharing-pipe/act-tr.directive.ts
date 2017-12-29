import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appActTr]'
})
export class ActTrDirective {

  constructor(el:ElementRef) {
    
      el.nativeElement.style.backgroundColor="#B2EBF2";
   }

}
