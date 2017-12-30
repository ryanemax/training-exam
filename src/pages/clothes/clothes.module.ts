import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';
import { ClothesItemComponent } from './clothes-item/clothes-item.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ClothesDetailComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    ClothesDetailComponent,
    ClothesItemComponent,
    ClothesListComponent    
  ]
})
export class ClothesModule { }
