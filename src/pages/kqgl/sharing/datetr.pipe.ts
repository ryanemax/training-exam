import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateYmd'
})
export class ToDateYmd implements PipeTransform {

  transform(value: any, args?: any): any {

    return value;
  }

}
