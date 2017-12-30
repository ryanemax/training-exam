import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asThousand'
})
export class AsThousandPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    
    let forConvert:String;
    let remain:String;

    if (value.length < 3) {
      return value;
    }
    else if (value.includes(".")){
      forConvert= value.substring(0, value.indexOf("."));
      remain = value.substr(value.indexOf("."), 2);
    } else {
      forConvert = value;
    }
    let i, j ;
    let num = 0;
    let arrayList : Array<String>;

    for (i = forConvert.length - 1; i >= 0 ; i--) {
      num = num + 1;
      if (num == 3) {
        let temp = "," + forConvert.substring(forConvert.length - 3, forConvert.length);
        forConvert = forConvert.substr(0, forConvert.length - 3);
        arrayList.push(temp);
        num = 0;
      }
    }

    for (j = arrayList.length - 1; j >=0; j--) {
      forConvert = forConvert + String(arrayList[j]);
    }

    forConvert = forConvert + String(remain);
    if (forConvert.startsWith(",")) {
      return forConvert.substring(1);
    }

    return forConvert;

  }

}
