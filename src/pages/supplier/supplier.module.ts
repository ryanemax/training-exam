import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SupplierListComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [SupplierListComponent]
})
export class SupplierModule { }
