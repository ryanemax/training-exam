import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCqzk'
})
export class ToCqzk implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "1"){
        return "出勤";
    } else if(value == "2") {
        return "休假";
    } else if(value == "3") {
        return "病假";
    }
    //alert(value.toDateYmd);
    
  }

}
