import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeHomeComponent } from './coffee-home/coffee-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ToKPipe } from './sharing/to-k.pipe';
import { ColorChangeDirective } from './sharing/color-change.directive';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

import { CoffeeService } from "./coffee-data";

import {CoffeeDialogComponent} from './coffee-dialog/coffee-dialog';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatCardModule,
    MatButtonModule,MatDialogModule,
    RouterModule.forChild([
      { path: '', component: CoffeeHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [

    CoffeeHomeComponent,
    ToKPipe,
    ColorChangeDirective,
    CoffeeDialogComponent
  ],
  providers:[CoffeeService],
  entryComponents:[CoffeeDialogComponent]
})

export class CoffeeModule { }
