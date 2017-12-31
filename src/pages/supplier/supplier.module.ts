import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ActButtonDirective } from './sharing/act-button.directive';
import { ToMailPipe } from './sharing/mail.pipe';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { SupplierService } from "./supplier-data";


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: SupplierListComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    SupplierListComponent,
    ActButtonDirective,
    ToMailPipe],

    providers:[SupplierService]
    
})
export class SupplierModule { }
