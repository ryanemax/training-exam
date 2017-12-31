import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-clothes1-dialog',
    templateUrl: 'app-clothes1-dialog.html',
})
export class Clothes1DialogComponent {

    clothes1={};
constructor(
    public dialogRef: MatDialogRef<Clothes1DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.clothes1[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.clothes1);
}

}