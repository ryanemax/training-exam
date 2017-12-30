import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-flower-dialog',
    templateUrl: 'app-flower-dialog.html',
})
export class FlowerDialogComponent {

flower={};
constructor(
    public dialogRef: MatDialogRef<FlowerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.flower[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.flower);
}

}