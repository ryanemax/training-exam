import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KqglHomeComponent } from './kqgl-home/kqgl-home.component';
import { KqglDetailComponent } from './kqgl-detail/kqgl-detail.component';
import { Button1Directive } from './sharing/button1.directive';
import { ToDateYmd } from './sharing/datetr.pipe';
import { ToCqzk } from './sharing/cqzk.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { KqglService } from "./kqgl-data";


import {KqglDialogComponent} from './kqgl-dialog/kqgl-dialog';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatCardModule,MatDialogModule,
    RouterModule.forChild([
      { path: '', component: KqglHomeComponent, pathMatch: 'full' },
      { path: ':id', component: KqglDetailComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    KqglHomeComponent,
    KqglDetailComponent,
    Button1Directive,
    ToDateYmd,
    ToCqzk,
    KqglDialogComponent,
  ],
  providers:[KqglService],
  entryComponents:[KqglDialogComponent]
})
export class KqglModule { }
