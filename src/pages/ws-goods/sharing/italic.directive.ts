import { Directive,ElementRef } from '@angular/core';

@Directive({
    selector:'[appItalic]'
})

export class ItalicDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.fontStyle="italic";
        el.nativeElement.style.color="red";
    }
}