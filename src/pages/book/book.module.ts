import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { BookHomeComponent } from './book-home/book-home.component';
import { BookItemComponent } from './book-item/book-item.component';
import { DisableDirective } from './sharing/diable.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BookHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [BookHomeComponent,
    BookItemComponent,
    DisableDirective]
})
export class BookModule { }
