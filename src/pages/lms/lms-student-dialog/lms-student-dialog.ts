import {Component,Inject} from "@angular/core";
import { LmsStudentService } from '../lms-student.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'lms-student-dialog',
    templateUrl: 'lms-student-dialog.html',
    styleUrls: ['lms-student-dialog.scss']
})
export class LmsStudentDialogComponent {

    classes:any = [];
    student: any = {};
    constructor(private lmsStudentService:LmsStudentService,
        public dialogRef: MatDialogRef<LmsStudentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        
        console.log(data);
        this.classes = data[0];
        Object.keys(data[1]).forEach(key=>{
            this.student[key] = data[key];
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    save(){
      this.lmsStudentService.registStudent(this.student).subscribe(
        data => {
          this.dialogRef.close(true);
        },
        error => {
          this.dialogRef.close(false);
        }
      );
    }

}