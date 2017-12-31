import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDataHomeComponent } from './weather-data-home/weather-data-home.component';
import { WeatherDataListComponent } from './weather-data-list/weather-data-list.component';
import { WeatherDataItemComponent } from './weather-data-item/weather-data-item.component';
import { WeatherButtonDirective } from './sharing/weather-button.directive';
import { WeatherPipePipe } from './sharing/weather-pipe.pipe';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { WeatherDataService } from "./weather-data";
import { MatDialogModule } from '@angular/material';
import { WeatherDataDialogComponent} from './weather-data-dialog/weather-data-dialog';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatButtonModule,MatCardModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: WeatherDataListComponent, pathMatch: 'full' },
      { path: ':id', component: WeatherDataItemComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    WeatherDataListComponent, WeatherButtonDirective, WeatherPipePipe,
    WeatherDataItemComponent, WeatherDataDialogComponent
  ],
  providers:[WeatherDataService],
  entryComponents:[WeatherDataDialogComponent]
})
export class WeatherDataModule { }
