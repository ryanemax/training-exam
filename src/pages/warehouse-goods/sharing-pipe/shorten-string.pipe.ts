import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenString'
})
export class ShortenStringPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    if(value.length>=10){
      value = value.substr(0,3) +"...";
    }
    return value;
  }

}
