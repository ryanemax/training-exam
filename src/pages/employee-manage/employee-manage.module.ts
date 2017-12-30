import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManageHomeComponent } from './employee-manage-home/employee-manage-home.component';
import { EmployeeManageListComponent } from './employee-manage-list/employee-manage-list.component';
import { Routes, RouterModule } from '@angular/router';
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
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,
    RouterModule.forChild([
      
      { path: 'list', component: EmployeeManageListComponent, pathMatch: 'full' },
      { path: '', component: EmployeeManageHomeComponent, pathMatch: 'full' },
     
    ])
  ],
  
  declarations: [EmployeeManageHomeComponent,EmployeeManageListComponent]
})
export class EmployeeManageModule { }
