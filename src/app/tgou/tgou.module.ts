import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { TgouMallComponent } from '../tgou-mall/tgou-mall.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TgouMallComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [TgouMallComponent]
})
export class TgouModule { }
