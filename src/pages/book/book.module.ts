import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { BookHomeComponent } from './book-home/book-home.component';
// import { BookItemComponent } from './book-item/book-item.component';
import { TitleDirective } from './sharing/Title.directive';
import { BookDialogComponent} from './book-dialog/book-dialog';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild([
      { path: '', component: BookHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [BookHomeComponent,
    // BookItemComponent,
    TitleDirective,
    BookDialogComponent],
  entryComponents:[BookDialogComponent]
})
export class BookModule { }
