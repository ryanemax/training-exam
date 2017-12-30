import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KqglHomeComponent } from './kqgl-home/kqgl-home.component';
import { Button1Directive } from './sharing/button1.directive';
import { ToDateYmd } from './sharing/datetr.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

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
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,
    RouterModule.forChild([
      { path: '', component: KqglHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    KqglHomeComponent,
    Button1Directive,
    ToDateYmd
    
  ]
})
export class KqglModule { }
