import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateYmd'
})
export class ToDateYmd implements PipeTransform {

  transform(value: any, args?: any): any {
    
    
    return "2017/12/15 00:14:18 I'm pipe";
  }

}
