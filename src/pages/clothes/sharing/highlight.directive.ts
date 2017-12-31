import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[appHightlight]",
})
export class HightLightDirective {
    constructor(el:ElementRef){
        el.nativeElement.style.background = "yellow";
    }
}