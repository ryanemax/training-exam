import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LmsStudentService } from '../lms-student.service';

@Component({
  selector: 'app-lms-student',
  templateUrl: './lms-student.component.html',
  styleUrls: ['./lms-student.component.scss']
})
export class LmsStudentComponent implements OnInit {
  // Student List
  classes:Array<any>;
  // Student List
  students:Array<any>;
  // MatPaginator Inputs
  length:number;
  pageSize:number;
  pageSizeOptions: Array<number>;
  displayedColumns: Array<string>;
  dataSource:any;

  constructor( private http:HttpClient, private lmsStudentService:LmsStudentService ) {
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.displayedColumns = ['studentNo', 'name', 'className', 'sex', 'operation'];
    this.lmsStudentService.getClasses()
    .subscribe(data => {
      this.classes = data["results"];
    });
  }

  @ViewChild(MatSort) sort: MatSort;

  // MatPaginator Output
  showPagingStudent(pageEvent: PageEvent) {
    console.log(pageEvent);
    let startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    this.dataSource = new MatTableDataSource(this.students.slice(startIndex, startIndex + pageEvent.pageSize));
    this.dataSource.sort = this.sort;
  }

  // Open Add Student Dialog
  openAddStudentDialog() {

  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.lmsStudentService.getStudents()
    .subscribe(data => {
      this.students = data["results"];
      // MatPaginator Inputs
      this.length = this.students.length;
      this.dataSource = new MatTableDataSource(this.students.slice(0, this.pageSize));
      this.dataSource.sort = this.sort;
    });
  }
}
