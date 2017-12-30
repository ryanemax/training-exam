import { Directive,ElementRef } from '@angular/core';

@Directive({
    selector : '[DisableDirective]'
})
export class DisableDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.boxShadow = "10px 10px 5px #888888";
        el.nativeElement.style.backgroundColor = "#0099cc";
        el.nativeElement.style.width = "90%";
    }
}