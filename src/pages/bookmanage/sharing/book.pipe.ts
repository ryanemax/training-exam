import{Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"remen"
})
export class BookPipe implements PipeTransform {
    transform(value: any, ...args: any[]){
        if(value>=1000){
            return "热门书籍";
        }else{
            return value;
        }
        
    }
}