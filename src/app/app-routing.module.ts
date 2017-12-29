import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule',
    // data: { title: "主页" }
  },
  {
    path: 'bigdata',
    loadChildren: './bigdata/bigdata.module#BigdataModule',
  },
  {
    path: 'eightstock',
    loadChildren: './eightstock/eightstock.module#EightstockModule',
  },
  {
    path: 'lms',
    loadChildren: './lms/lms.module#LmsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
