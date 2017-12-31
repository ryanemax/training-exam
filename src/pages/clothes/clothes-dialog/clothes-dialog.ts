import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-clothes-dialog',
    templateUrl: 'app-clothes-dialog.html',
})
export class ClothesDialogComponent {

clothes={};
constructor(
    public dialogRef: MatDialogRef<ClothesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.clothes[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.clothes);
}

}