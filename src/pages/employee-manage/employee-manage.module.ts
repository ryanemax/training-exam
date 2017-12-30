import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManageHomeComponent } from './employee-manage-home/employee-manage-home.component';
import { EmployeeManageListComponent } from './employee-manage-list/employee-manage-list.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      
      { path: '', component: EmployeeManageListComponent, pathMatch: 'full' },
      { path: 'home', component: EmployeeManageHomeComponent, pathMatch: 'full' },
     
    ])
  ],
  
  declarations: [EmployeeManageHomeComponent,EmployeeManageListComponent]
})
export class EmployeeManageModule { }
