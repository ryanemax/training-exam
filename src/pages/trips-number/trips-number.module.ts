import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsNumberHomeComponent } from './trips-number-home/trips-number-home.component';
import { Routes, RouterModule } from '@angular/router';
import { CountPipe } from './count.pipe';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,
    RouterModule.forChild([
      { path: '', component: TripsNumberHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    TripsNumberHomeComponent,
    CountPipe]
})
export class TripsNumberModule { }
