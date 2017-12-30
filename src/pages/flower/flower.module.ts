import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerHomeComponent } from './flower-home/flower-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonDirective } from './sharing/button.directive';
import { ToKPipe } from './sharing/to-k.pipe';
import { MatDialogModule } from '@angular/material';
import { FlowerService } from "./flower-data";
import {FlowerDialogComponent} from './flower-dialog/flower-dialog';


import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,MatDialogModule,

    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,
    MatOptionModule,
  
    RouterModule.forChild([
      { path: '', component: FlowerHomeComponent, pathMatch: 'full' },
    
    ])
  ],
  declarations: [FlowerHomeComponent,
                ButtonComponent,
                ButtonDirective,
                ToKPipe,
                FlowerDialogComponent],
  providers:[FlowerService],
  entryComponents:[FlowerDialogComponent]
})
export class FlowerModule { }
