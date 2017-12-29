import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KqglHomeComponent } from './kqgl-home/kqgl-home.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', component: KqglHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [KqglHomeComponent]
})
export class KqglModule { }
