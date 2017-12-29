import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"say666"
})
export class Say666Pipe implements PipeTransform{
    constructor(){}
    transform(value: any, ...args: any[]){
        return "666";
    }
}