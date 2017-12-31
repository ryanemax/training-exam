import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LmsStudentService } from '../lms-student.service';
import { LmsStudentDialogComponent } from '../lms-student-dialog/lms-student-dialog';

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
              public dialog: MatDialog) {
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.displayedColumns = ['studentNo', 'name', 'className', 'sex', 'operation'];
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
  getStudents() {
    console.log(this.searchClass);
    console.log(this.searchName);
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
  
  openDialog(student?): void {
    if(!student){
      student = {studentNo: 0, name:"", classId:"", sex: ""};
    }
    let dialogRef = this.dialog.open(LmsStudentDialogComponent, {
      width: '250px',
      data: student,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.lmsStudentService.registStudent(result).subscribe(
        data => {
          this.lmsStudentService.getStudents()
          .subscribe(data => {
            this.students = data["results"];
            // MatPaginator Inputs
            this.length = this.students.length;
            this.dataSource = new MatTableDataSource(this.students.slice(0, this.pageSize));
            this.dataSource.sort = this.sort;
          });
        }
      );
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
