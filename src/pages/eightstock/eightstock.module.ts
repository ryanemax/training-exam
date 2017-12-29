import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EightstockHomeComponent } from './eightstock-home/eightstock-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EightstockHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [EightstockHomeComponent]
})
export class EightstockModule { }
