import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringManagementHomeComponent } from './engineering-management-home/engineering-management-home.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EngineeringManagementHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [EngineeringManagementHomeComponent]
})
export class EngineeringManagementModule { }
