import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsNumberHomeComponent } from './trips-number-home/trips-number-home.component';
import { Routes, RouterModule } from '@angular/router';
import { CountPipe } from './count.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TripsNumberHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    TripsNumberHomeComponent,
    CountPipe]
})
export class TripsNumberModule { }
