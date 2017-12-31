import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-eightstock-newschat',
  templateUrl: './eightstock-newschat.component.html'
})


export class EightstockNewschatComponent {

  ppppp: any;
  constructor(
    public dialogRef: MatDialogRef<EightstockNewschatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    Object.keys(data).forEach(key => {
      this.ppppp = data[key];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
