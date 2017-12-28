import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StudentListComponent, pathMatch: 'full' },
      { path: 'detail', component: StudentDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [StudentListComponent, StudentDetailComponent]
})
export class StudentModule { }
