import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) {
      return 0 + "度";
    }
    return value + "度";
  }

}
