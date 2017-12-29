import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDataHomeComponent } from './weather-data-home/weather-data-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WeatherDataHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [WeatherDataHomeComponent]
})
export class WeatherDataModule { }
