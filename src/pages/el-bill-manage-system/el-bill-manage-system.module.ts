import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ElHomeComponent } from './el-home/el-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ElHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [ElHomeComponent]
})
export class ElBillManageSystemModule { }
