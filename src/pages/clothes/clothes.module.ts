import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ToKPipe } from './sharing/to-k.pipe';
import { ActButtonDirective } from './sharing/act-button.directive';
import { ActCardDirective } from './sharing/act-card.directive';

import { ActButtonComponent } from './act-button/act-button.component';

import { Say666Pipe } from './sharing/say-666.pipe';

import { HightLightDirective } from './sharing/highlight.directive';

import { MatFormFieldModule, MatDialog, MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';
import { ClothesItemComponent } from './clothes-item/clothes-item.component';
import { ClothesService } from './clothes-data';
import { ClothesDialogComponent } from './clothes-dialog/clothes-dialog';



@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatCardModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: ClothesListComponent, pathMatch: 'full' },
      { path: ':id', component: ClothesDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    ClothesListComponent,
    ClothesDetailComponent,
    ClothesItemComponent,
    ToKPipe,
    Say666Pipe,
    ActButtonDirective,
    ActCardDirective,
    HightLightDirective,
    ActButtonComponent,
    ClothesDialogComponent
  ],
  providers:[ClothesService],
  entryComponents:[ClothesDialogComponent]
})
export class ClothesModule { }