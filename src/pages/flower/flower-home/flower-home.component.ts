import { Component, OnInit , Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FlowerService } from '../flower-data';
import { Observable } from '../../../../node_modules/_rxjs@5.5.2@rxjs/Observable';
interface Flower{
  id?:number,
  name:string,
  language:string,
  price:string,
  objectId?:string;
  updatedAt?:string;
  createdAt?:string;
}
interface ParseResponse {
  results: any[];
}
@Component({
  selector: 'app-flower-home',
  templateUrl: './flower-home.component.html',
  styleUrls: ['./flower-home.component.scss']
})
export class FlowerHomeComponent implements OnInit {
  flowers:Array<Flower>;
  selectedFlower:Flower;
  constructor(private http:HttpClient,private flowerServ:FlowerService) {
    this.flowerServ.loadFlowersData();
  }
  /*constructor() { 
    this.loadFlowersData();
  }
  sortUsers(type){
    if (type == 'asc') {
      this.flowers.sort((a,b)=>(a.id-b.id));
    }
    if (type == 'desc') {
      this.flowers.sort((a,b)=>(b.id-a.id));
    }
    if (type == 'random') {
      this.flowers.sort((a,b)=>(Math.random() - 0.5));
    }
    console.log("sortUsers Works!");
  }
  loadFlowersData(){
    this.flowers = [
      {id:1,name:"百合",language:"百年好合",price:"800"},
      {id:2,name:"玫瑰",language:"爱情",price:"2800"},
      {id:3,name:"郁金香",language:"荣誉的皇冠",price:"3000"}
    ];
  }
  addNewFlower(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newFlower:Flower = {
      id:Number(uuid),
      name:"樱花",
      language:"sakura",
      price:"200"
    };
    this.flowers.push(newFlower);
  }
  deleteFlowerByID(id){
    this.flowers.forEach((flower,index,arr)=>{
      if(flower.id===id){
        arr.splice(index,1);
      }
    });
  }*/
  selectFlower(flower){
    this.selectedFlower=flower;
  }
  ngOnInit() {
  }

}
