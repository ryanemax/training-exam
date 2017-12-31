import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipstickListComponent } from './lipstick-list/lipstick-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ToKPipe } from './sharing/to-k.pipe';
import { ColorChangeDirective } from './sharing/color-change.directive';
import { LipStickService } from './lipstick-data';
import {LipstickDialogComponent} from './lipstick-dialog/lipstick-dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: LipstickListComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [LipstickListComponent,
                  ToKPipe,
                  ColorChangeDirective,
                  LipstickDialogComponent],
  providers:[LipStickService],
  entryComponents:[LipstickDialogComponent]
})
export class LipstickModule { }
