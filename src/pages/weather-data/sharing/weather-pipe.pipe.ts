import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != 0) {
      return value + "度";
    }
    
    return value;
  }

}
