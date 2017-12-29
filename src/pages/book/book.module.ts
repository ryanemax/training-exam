import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { BookHomeComponent } from './book-home/book-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BookHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [BookHomeComponent]
})
export class BookModule { }
