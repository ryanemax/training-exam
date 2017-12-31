import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'lms-student-dialog',
    templateUrl: 'lms-student-dialog.html',
})
export class LmsStudentDialogComponent {

    student: any = {};
    constructor(
        public dialogRef: MatDialogRef<LmsStudentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        Object.keys(data).forEach(key=>{
            this.student[key] = data[key];
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    save(){
        this.dialogRef.close(this.student);
    }

}