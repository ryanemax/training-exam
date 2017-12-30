import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMail'
})
export class ToMailPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    value = value + "@accenture.com"
    
    return value;
  }

}
