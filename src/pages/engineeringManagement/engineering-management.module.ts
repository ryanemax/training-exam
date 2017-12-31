import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EngineeringManagementHomeComponent } from './engineering-management-home/engineering-management-home.component';
import { EngineeringBtnComponent } from './engineering-btn/engineering-btn.component';
import { Routes, RouterModule } from '@angular/router';
import { DateFormatPipe } from './sharing/date-format.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EngineeringsMasterService } from "./engineManMaster-data";
import { MatDialogModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { EngineeringManagementDialogComponent } from './engineering-management-dialog/engineering-management-dialog.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, MatIconModule,
    MatButtonModule, MatFormFieldModule,
    MatCheckboxModule, MatInputModule,
    MatDialogModule,
    MatDatepickerModule, MatNativeDateModule,
    RouterModule.forChild([
      { path: '', component: EngineeringManagementHomeComponent, pathMatch: 'full' },
      { path: 'detail', component: EngineeringBtnComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [EngineeringManagementHomeComponent,
    EngineeringBtnComponent,
    DateFormatPipe,
    EngineeringManagementDialogComponent],
  providers: [EngineeringsMasterService],
  entryComponents:[EngineeringManagementDialogComponent]
})
export class EngineeringManagementModule { }
