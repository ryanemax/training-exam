import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toK'
})
export class TgouToKPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value >= 1000){
      return "¥"+(value/1000).toFixed(3)  + "k";
    }
    return "¥"+value;
  }

}
