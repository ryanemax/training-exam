import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { BigdataHomeComponent } from '../bigdata-home/bigdata-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BigdataHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [BigdataHomeComponent]
})
export class BigdataModule { }
