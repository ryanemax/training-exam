import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";

interface ClassInfo {
  gradeNo?: string;
  classNo: string;
  name: string;
}

@Component({
  selector: 'app-lms-class',
  templateUrl: './lms-class.component.html',
  styleUrls: ['./lms-class.component.scss']
})
export class LmsClassComponent implements OnInit {
  classInfoArr: Array<ClassInfo>;
  constructor(private http:Http) {
    this.loadClassData();
  }

  ngOnInit() {
  }

  loadClassData() {

    let url = "http://47.92.145.25:80/parse"+"/classes/LmsClass";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.classInfoArr = data.json().results;
    });

}
addNewClass() {
  let url = "http://47.92.145.25:80/parse"+"/classes/LmsClass";
  let headers:Headers = new Headers();
  headers.append("Content-Type","application/json");
  headers.append("X-Parse-Application-Id","dev");
  headers.append("X-Parse-Master-Key","angulardev");
  let options ={
    headers:headers
  };
  let newClass: ClassInfo = {
    gradeNo: "1",
    classNo: "A",
    name: "1-A"
  };
  this.http.post(url,newClass,options).subscribe(data=>{
    this.loadClassData();
  });
}

deleteClassByID(id) {
  let url = "http://47.92.145.25:80/parse"+"/classes/LmsClass"+"/"+id;
  let headers:Headers = new Headers();
  headers.append("Content-Type","application/json");
  headers.append("X-Parse-Application-Id","dev");
  headers.append("X-Parse-Master-Key","angulardev");
  let options ={
    headers:headers
  };

  this.http.delete(url,options).subscribe(data=>{
    this.loadClassData();
  });
}
}