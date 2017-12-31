import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Material Design Start
import { MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Design End

import { LmsHomeComponent } from './lms-home/lms-home.component';
import { LmsStudentComponent } from './lms-student/lms-student.component';
import { LmsStudentRegistComponent } from './lms-student-regist/lms-student-regist.component';
import { LmsStudentDetailComponent } from './lms-student-detail/lms-student-detail.component';
import { LmsStudentDialogComponent } from './lms-student-dialog/lms-student-dialog';
import { LmsClassComponent } from './lms-class/lms-class.component';
import { LmsScoreComponent } from './lms-score/lms-score.component';

import { LmsStudentService } from './lms-student.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LmsHomeComponent, pathMatch: 'full' },
      { path: 'student', component: LmsStudentComponent, pathMatch: 'full' },
      { path: 'student/regist', component: LmsStudentRegistComponent, pathMatch: 'full' },
      { path: 'student/:id', component: LmsStudentDetailComponent, pathMatch: 'full' },
      { path: 'class', component: LmsClassComponent, pathMatch: 'full' },
      { path: 'score', component: LmsScoreComponent, pathMatch: 'full' }
    ]),
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: [
    LmsHomeComponent,
    LmsStudentComponent,
    LmsStudentRegistComponent,
    LmsStudentDetailComponent,
    LmsStudentDialogComponent,
    LmsClassComponent,
    LmsScoreComponent],
  providers: [LmsStudentService],
  entryComponents:[LmsStudentDialogComponent]
})
export class LmsModule { }
