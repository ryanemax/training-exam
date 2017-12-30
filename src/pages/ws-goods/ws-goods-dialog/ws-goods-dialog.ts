import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-ws-goods-dialog',
    templateUrl: 'app-ws-goods-dialog.html',
})
export class WsGoodsDialogComponent {

goods={};
constructor(
    public dialogRef: MatDialogRef<WsGoodsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.goods[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.goods);
}
}