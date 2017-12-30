import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-lms-student',
  templateUrl: './lms-student.component.html',
  styleUrls: ['./lms-student.component.scss']
})
export class LmsStudentComponent implements OnInit {
  // Student List
  students:any;
  // MatPaginator Inputs
  length:number;
  pageSize:number;
  pageSizeOptions: Array<number>;
  displayedColumns: Array<string>;
  dataSource:any;

  constructor( private http:HttpClient ) {
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.displayedColumns = ['studentNo', 'name', 'className', 'sex'];
    this.loadAllStudent();
  }

  @ViewChild(MatSort) sort: MatSort;

  loadAllStudent() {
    let options = {
      headers: REST_API_HEADERS
    };
    this.http.get<ParseResponse>(REST_API_URL, options).subscribe(data=>{
      this.students = data['results'];
      this.length = this.students.length;
      this.dataSource = new MatTableDataSource(this.students.slice(0, this.pageSize));
    });
  }

  // MatPaginator Output
  showPagingStudent(pageEvent: PageEvent) {
    console.log(pageEvent);
    let startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    this.dataSource = new MatTableDataSource(this.students.slice(startIndex, startIndex + pageEvent.pageSize));
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
  }
}

interface ParseResponse {
  results: any[];
}
export interface LmsStudent {
  studentNo: number;
  name: string;
  classId: string;
  className: string;
  sex: string;
}

const REST_API_URL: string = 'http://47.92.145.25:80/parse/classes/LmsStudent';
const REST_API_HEADERS: HttpHeaders = new HttpHeaders({
  "Content-Type": "application/json",
  "X-Parse-Application-Id": "dev",
  "X-Parse-Master-Key": "angulardev"
});

const ELEMENT_DATA: LmsStudent[] = [
  {studentNo: 1, name: 'Hydrogen', classId: '1_1', className: '一年一班', sex: 'male'},
  {studentNo: 2, name: 'Helium', classId: '1_1', className: '一年一班', sex: 'female'},
  {studentNo: 3, name: 'Lithium', classId: '1_1', className: '一年一班', sex: 'female'},
  {studentNo: 4, name: 'Beryllium', classId: '1_1', className: '一年一班', sex: 'male'},
  {studentNo: 5, name: 'Boron', classId: '1_1', className: '一年一班', sex: 'male'},
  {studentNo: 6, name: 'Carbon', classId: '1_1', className: '一年二班', sex: 'male'},
  {studentNo: 7, name: 'Nitrogen', classId: '1_1', className: '一年二班', sex: 'male'},
  {studentNo: 8, name: 'Oxygen', classId: '1_1', className: '一年二班', sex: 'male'},
  {studentNo: 9, name: 'Fluorine', classId: '1_1', className: '一年二班', sex: 'male'},
  {studentNo: 10, name: 'Neon', classId: '1_1', className: '一年二班', sex: 'male'},
  {studentNo: 11, name: 'Sodium', classId: '1_1', className: '二年一班', sex: 'male'},
  {studentNo: 12, name: 'Magnesium', classId: '1_1', className: '二年一班', sex: 'male'},
  {studentNo: 13, name: 'Aluminum', classId: '1_1', className: '二年一班', sex: 'male'},
  {studentNo: 14, name: 'Silicon', classId: '1_1', className: '二年一班', sex: 'male'},
  {studentNo: 15, name: 'Phosphorus', classId: '1_1', className: '二年一班', sex: 'male'},
  {studentNo: 16, name: 'Sulfur', classId: '1_1', className: '二年二班', sex: 'male'},
  {studentNo: 17, name: 'Chlorine', classId: '1_1', className: '二年二班', sex: 'male'},
  {studentNo: 18, name: 'Argon', classId: '1_1', className: '二年二班', sex: 'male'},
  {studentNo: 19, name: 'Potassium', classId: '1_1', className: '二年二班', sex: 'male'},
  {studentNo: 20, name: 'Calcium', classId: '1_1', className: '二年二班', sex: 'male'},
];