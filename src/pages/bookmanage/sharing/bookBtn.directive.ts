import {Directive,ElementRef} from '@angular/core';
@Directive({
    selector:'[appBookBtn]',
})
export class BookBtn{
    constructor(el:ElementRef){
        el.nativeElement.style.background="red";
    }
}