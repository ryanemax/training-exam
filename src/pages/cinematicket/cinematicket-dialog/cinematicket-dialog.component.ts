import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-cinematicket-dialog',
    templateUrl: 'cinematicket-dialog.component.html',
})
export class CinematicketDialogComponent {
    cinema = {};
    constructor(
        public dialogRef: MatDialogRef<CinematicketDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key => {
            this.cinema[key] = data[key];
        });
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    save() {
        this.dialogRef.close(this.cinema);
    }
}