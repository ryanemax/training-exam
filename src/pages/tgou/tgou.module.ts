import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { TgouMallComponent } from './tgou-mall/tgou-mall.component';
import { TgouItemComponent } from './tgou-item/tgou-item.component';

import { TgouToKPipe } from './sharing/tgou-to-k.pipe';
import { TgouActCardDirective } from './sharing/tgou-act-card.directive';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatOptionModule,
    MatIconModule,MatMenuModule,MatCardModule,MatButtonModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: TgouMallComponent, pathMatch: 'full' },
      { path: ':id', component: TgouItemComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    TgouMallComponent,
    TgouItemComponent,
    TgouToKPipe,
    TgouActCardDirective
  ]
})
export class TgouModule { }
