import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/operator/map';

export interface LmsClass {
  objectId: string,
  gradeNo: string;
  classNo: string;
  name: string;
}

export interface LmsStudent {
  objectId: string,
  studentNo: number;
  name: string;
  description: string,
  classId: string;
  className: string;
  sex: string;
}

const REST_API_LMS_STUDENT_URL: string = 'http://47.92.145.25:80/parse/classes/LmsStudent';
const REST_API_LMS_CLASS_URL: string = 'http://47.92.145.25:80/parse/classes/LmsClass';
const REST_API_HEADERS: HttpHeaders = new HttpHeaders({
  "Content-Type": "application/json",
  "X-Parse-Application-Id": "dev",
  "X-Parse-Master-Key": "angulardev"
});

@Injectable()
export class LmsStudentService {
  constructor(private http:HttpClient){
  }

  getClasses(): Observable<Object> {
    let options = {
      headers: REST_API_HEADERS
    };
    return this.http.get(REST_API_LMS_CLASS_URL, options);
  }

  getStudents(): Observable<Object> {
    let options = {
      headers: REST_API_HEADERS
    };
    return this.http.get(REST_API_LMS_STUDENT_URL, options);
  }

  getStudentById(id:string): Observable<Object> {
    let options = {
      headers: REST_API_HEADERS
    };
    return this.http.get(REST_API_LMS_STUDENT_URL + "/" + id, options);
  }
}


// const ELEMENT_DATA: LmsStudent[] = [
//   {objectId: 'ssss', studentNo: 1, name: 'Hydrogen', classId: '1_1', className: '一年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 2, name: 'Helium', classId: '1_1', className: '一年一班', sex: 'female'},
//   {objectId: 'ssss', studentNo: 3, name: 'Lithium', classId: '1_1', className: '一年一班', sex: 'female'},
//   {objectId: 'ssss', studentNo: 4, name: 'Beryllium', classId: '1_1', className: '一年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 5, name: 'Boron', classId: '1_1', className: '一年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 6, name: 'Carbon', classId: '1_1', className: '一年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 7, name: 'Nitrogen', classId: '1_1', className: '一年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 8, name: 'Oxygen', classId: '1_1', className: '一年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 9, name: 'Fluorine', classId: '1_1', className: '一年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 10, name: 'Neon', classId: '1_1', className: '一年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 11, name: 'Sodium', classId: '1_1', className: '二年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 12, name: 'Magnesium', classId: '1_1', className: '二年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 13, name: 'Aluminum', classId: '1_1', className: '二年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 14, name: 'Silicon', classId: '1_1', className: '二年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 15, name: 'Phosphorus', classId: '1_1', className: '二年一班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 16, name: 'Sulfur', classId: '1_1', className: '二年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 17, name: 'Chlorine', classId: '1_1', className: '二年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 18, name: 'Argon', classId: '1_1', className: '二年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 19, name: 'Potassium', classId: '1_1', className: '二年二班', sex: 'male'},
//   {objectId: 'ssss', studentNo: 20, name: 'Calcium', classId: '1_1', className: '二年二班', sex: 'male'},
// ];