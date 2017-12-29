import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesHomeComponent } from './clothes-home/clothes-home.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ClothesHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [ClothesHomeComponent]
})
export class ClothesModule { }
