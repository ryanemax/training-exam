import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-engineering-management-dialog',
  templateUrl: './engineering-management-dialog.component.html',
  styleUrls: ['./engineering-management-dialog.component.scss']
})
export class EngineeringManagementDialogComponent {

  user = {};
  constructor(
    public dialogRef: MatDialogRef<EngineeringManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.keys(data).forEach(key => {
      this.user[key] = data[key];
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.user);
  }

}