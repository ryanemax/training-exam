import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { LmsStudentService } from '../lms-student.service';
import { LmsStudentDialogComponent } from '../lms-student-dialog/lms-student-dialog';
import { error } from 'selenium-webdriver';

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

  // Search Condition
  searchName:string = "";
  searchClass:string;

  // MatPaginator Inputs
  length:number;
  pageSize:number;
  pageSizeOptions: Array<number>;
  displayedColumns: Array<string>;
  dataSource:any;

  constructor( private http:HttpClient, private lmsStudentService:LmsStudentService,
              public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.displayedColumns = ['studentNo', 'name', 'className', 'sex', 'operation'];
  }

  @ViewChild(MatSort) sort: MatSort;

  // MatPaginator Output
  showPagingStudent(pageEvent: PageEvent) {
    let startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    this.dataSource = new MatTableDataSource(this.students.slice(startIndex, startIndex + pageEvent.pageSize));
    this.dataSource.sort = this.sort;
  }

  // Open Add Student Dialog
  getStudents() {
    let searchCondition:any = {};
    if (this.searchName) {
      searchCondition.name = {"$regex":".*(" + this.searchName + ").*"};
    }
    if (this.searchClass) {
      searchCondition.classId = this.searchClass;
    }
    this.lmsStudentService.getStudents(searchCondition)
    .subscribe(data => {
      this.students = data["results"];

      this.students.forEach(item => {
        let classInfo = this.classes.find(classObj => classObj.classNo == item.classId);
        if (classInfo) {
          item.className = classInfo.name;
        } else {
          item.className = item.classId
        }
      });

      // MatPaginator Inputs
      this.length = this.students.length;
      this.dataSource = new MatTableDataSource(this.students.slice(0, this.pageSize));
      this.dataSource.sort = this.sort;
    });
  }

  deleteStudentByID(id) {
    this.lmsStudentService.deleteStudentByID(id).subscribe(
      data => {
        this.openSnackBar('删除成功！', 'Close');
        this.getStudents();
      },
      error => {
        this.openSnackBar('删除失败！', 'Close');
        this.getStudents();
      }
    );
  }
  
  openDialog(student?): void {
    if(!student){
      student = {studentNo: '', name:"", classId:"", sex: ""};
    }
    let dialogRef = this.dialog.open(LmsStudentDialogComponent, {
      width: '400px',
      data: [this.classes, student],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result == undefined) {
        this.openSnackBar('取消登陆！', 'Close');
      } else if (result) {
        this.openSnackBar('登陆成功！', 'Close');
      } else {
        this.openSnackBar('登陆失败！', 'Close');
      }
      this.getStudents();
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.lmsStudentService.getClasses()
    .subscribe(data => {
      this.classes = data["results"];
      this.getStudents();
    });
  }
}
