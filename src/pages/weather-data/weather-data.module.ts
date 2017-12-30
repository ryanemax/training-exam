import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDataHomeComponent } from './weather-data-home/weather-data-home.component';
import { WeatherDataListComponent } from './weather-data-list/weather-data-list.component';
import { WeatherDataItemComponent } from './weather-data-item/weather-data-item.component';
import { WeatherButtonDirective } from './sharing/weather-button.directive';
import { WeatherPipePipe } from './sharing/weather-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WeatherDataListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [WeatherDataListComponent, WeatherButtonDirective, WeatherPipePipe]
})
export class WeatherDataModule { }
