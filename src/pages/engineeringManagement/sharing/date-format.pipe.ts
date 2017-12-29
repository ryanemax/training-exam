import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 1000000000) {
      return (value / 1000000000).toFixed(1) + "g";
    } else {
      return "20171331";
    }
  }

}
