import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsNumberHomeComponent } from './trips-number-home/trips-number-home.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TripsNumberHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [TripsNumberHomeComponent]
})
export class TripsNumberModule { }
