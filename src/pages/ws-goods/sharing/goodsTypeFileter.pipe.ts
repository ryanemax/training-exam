import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'tpFilter'
  })

export class GoodsTypeFilter implements PipeTransform{
  transform(value: any, args?: any): any {
      if(value != null && value==1){
          return "单一购买";
      }else if(value != null && value==2){
        return "定期购买";
      }else{
        return "";
      }
  }
}