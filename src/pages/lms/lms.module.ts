import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { LmsHomeComponent } from './lms-home/lms-home.component';
import { LmsStudentComponent } from './lms-student/lms-student.component';
import { LmsClassComponent } from './lms-class/lms-class.component';
import { LmsScoreComponent } from './lms-score/lms-score.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LmsHomeComponent, pathMatch: 'full' },
      { path: 'student', component: LmsStudentComponent, pathMatch: 'full' },
      { path: 'class', component: LmsClassComponent, pathMatch: 'full' },
      { path: 'score', component: LmsScoreComponent, pathMatch: 'full' }
    ]),
    MatTabsModule
  ],
  declarations: [LmsHomeComponent, LmsStudentComponent, LmsClassComponent, LmsScoreComponent]
})
export class LmsModule { }
