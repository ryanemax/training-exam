import { Directive, ElementRef } from '@angular/core'

@Directive({
    selector:'[appActButton]'
})

export class ActButtonDirestive {
    constructor(el:ElementRef){
        el.nativeElement.style.backgroudColor = "red"
        el.nativeElement.style.fontSize = "28px";
        el.nativeElement.style.margin = "5px";
        el.nativeElement.style.boxShadow = "10px 10px 5px #888888";
        // el.nativeElement.innerHTML = "<span>X</span>";
    }
}