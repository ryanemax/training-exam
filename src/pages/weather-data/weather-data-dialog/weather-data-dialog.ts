import {Component,Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-weather-dialog',
    templateUrl: 'app-weather-data-dialog.html',
})
export class WeatherDataDialogComponent {

weatherData={};
constructor(
    public dialogRef: MatDialogRef<WeatherDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        Object.keys(data).forEach(key=>{
            this.weatherData[key] = data[key];
        });
    }
onNoClick(): void {
    this.dialogRef.close();
}
save(){
    this.dialogRef.close(this.weatherData);
}
}