import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-warehouse-good-addupd',
    templateUrl: 'app-warehouse-good-addupd.html',
})
export class WarehouseGoodsAddupdDialogComponent {
goods={};
constructor(
    public dialogRef: MatDialogRef<WarehouseGoodsAddupdDialogComponent>,
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