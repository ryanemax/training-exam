import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KqglHomeComponent } from './kqgl-home/kqgl-home.component';
import { Button1Directive } from './sharing/button1.directive';
import { ToDateYmd } from './sharing/datetr.pipe';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', component: KqglHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    KqglHomeComponent,
    Button1Directive,
    ToDateYmd
  ]
})
export class KqglModule { }
