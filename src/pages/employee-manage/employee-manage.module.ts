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
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { EmployeeService } from "./employee-data";
import { FormsModule } from '@angular/forms';
import {EmployeeDialogComponent} from './employee-dialog/employee-dialog';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatDialogModule,MatButtonModule,MatIconModule,MatMenuModule,MatCardModule,
    MatSelectModule,MatOptionModule,
    RouterModule.forChild([
      { path: '', component: EmployeeManageHomeComponent, pathMatch: 'full' },      
      { path:':id', component: EmployeeManageListComponent, pathMatch: 'full' },
    ])
  ],
  providers:[EmployeeService],
  declarations: [EmployeeManageHomeComponent,EmployeeManageListComponent,EmployeeDialogComponent],
  entryComponents:[EmployeeDialogComponent]
})
export class EmployeeManageModule { }
