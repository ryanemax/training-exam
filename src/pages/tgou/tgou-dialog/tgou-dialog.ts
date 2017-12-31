import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-tgou-dialog',
    templateUrl: 'app-tgou-dialog.html',
})
export class TgouDialogComponent {

user={};
constructor(
    public dialogRef: MatDialogRef<TgouDialogComponent>,
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