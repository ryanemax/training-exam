import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorationEngineeringManagementHomeComponent } from './decoration-engineering-management-home/decoration-engineering-management-home.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DecorationEngineeringManagementHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [DecorationEngineeringManagementHomeComponent]
})
export class DecorationEngineeringManagementModule { }
