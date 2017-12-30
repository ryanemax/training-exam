import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-kqgl-dialog',
    templateUrl: 'app-kqgl-dialog.html',
})
export class KqglDialogComponent {

user={};
constructor(
    public dialogRef: MatDialogRef<KqglDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.user[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.user);
}

}