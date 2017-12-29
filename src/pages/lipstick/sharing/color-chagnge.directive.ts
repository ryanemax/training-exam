import { Directive ,ElementRef } from '@angular/core';

@Directive({
    selector:"[appColorChange]",
})

export class ColorChangeDirective {
    constructor(el){
        el.nativeElement.style.background='red';
    }
}