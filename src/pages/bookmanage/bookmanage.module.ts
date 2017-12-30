import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmanageHomeComponent } from './bookmanage-home/bookmanage-home.component';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookItemComponent } from './book-item/book-item.component';
import {BookPipe} from './sharing/book.pipe';
import {BookBtn} from './sharing/bookBtn.directive';

<<<<<<< HEAD
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,MatSelectModule,MatOptionModule,MatIconModule,MatMenuModule,
=======
@NgModule({
  imports: [
    CommonModule,
>>>>>>> 277332d88922077c2d6b42bf6c4fe227924aa8d4
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
