import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmanageHomeComponent } from './bookmanage-home/bookmanage-home.component';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookItemComponent } from './book-item/book-item.component';
import {BookPipe} from './sharing/book.pipe';
import {BookBtn} from './sharing/bookBtn.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BookListComponent, pathMatch: 'full' },
      { path: 'detail', component: BookDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    BookmanageHomeComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
    BookPipe,
    BookBtn
  ]
})
export class BookmanageModule { }
