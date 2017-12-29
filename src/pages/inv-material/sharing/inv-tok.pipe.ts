import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invTok'
})
export class InvTokPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value >= 1000000000){
      return (value/1000000000).toFixed(1) + "G";
    }
    if(value >= 1000000){
      return (value/1000000).toFixed(1)  + "M";
    }
    if(value >= 1000){
      return (value/1000).toFixed(1)  + "K";
    }
    return value;
  }

}
