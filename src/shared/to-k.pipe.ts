import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toK'
})
export class ToKPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value >= 1000000000){
      return (value/1000000000).toFixed(1) + "g";
    }
    
    if(value >= 1000000){
      return (value/1000000).toFixed(1)  + "m";
    }
    if(value >= 1000){
      return (value/1000).toFixed(1)  + "k";
    }
    
    return value;
  }

}
