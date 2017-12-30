import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyUnit'
})
export class MoneyUnitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + "亿";
  }

}
