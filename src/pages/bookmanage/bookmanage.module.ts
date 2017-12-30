import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmanageHomeComponent } from './bookmanage-home/bookmanage-home.component';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookItemComponent } from './book-item/book-item.component';
import {BookPipe} from './sharing/book.pipe';
import {BookBtn} from './sharing/bookBtn.directive';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: BookListComponent, pathMatch: 'full' },
      { path: ':id', component: BookDetailComponent, pathMatch: 'full' }
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
