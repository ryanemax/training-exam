import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvHomeComponent } from './inv-home/inv-home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: InvHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [InvHomeComponent]
})
export class InvMaterialModule { }
