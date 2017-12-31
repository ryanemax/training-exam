import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-coffee-dialog',
    templateUrl: 'app-coffee-dialog.html',
})
export class CoffeeDialogComponent {

coffee={};
constructor(
    public dialogRef: MatDialogRef<CoffeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.coffee[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.coffee);
}

}