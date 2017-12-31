import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringManagementHomeComponent } from './engineering-management-home/engineering-management-home.component';
import { EngineeringBtnComponent } from './engineering-btn/engineering-btn.component';
import { Routes, RouterModule } from '@angular/router';
import { DateFormatPipe } from './sharing/date-format.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EngineeringsMasterService } from "./engineManMaster-data";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forChild([
      { path: '', component: EngineeringManagementHomeComponent, pathMatch: 'full' },
      { path: 'detail', component: EngineeringBtnComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [EngineeringManagementHomeComponent, EngineeringBtnComponent, DateFormatPipe],
  providers: [EngineeringsMasterService]
})
export class EngineeringManagementModule { }
