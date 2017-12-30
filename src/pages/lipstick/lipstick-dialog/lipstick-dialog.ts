import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-lipstick-dialog',
    templateUrl: 'app-lipstick-dialog.html',
})
export class LipstickDialogComponent {

    lipstick={};
constructor(
    public dialogRef: MatDialogRef<LipstickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.lipstick[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.lipstick);
}
}