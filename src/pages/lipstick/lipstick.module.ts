import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipstickListComponent } from './lipstick-list/lipstick-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ToKPipe } from './sharing/to-k.pipe';
import { ColorChangeDirective } from './sharing/color-change.directive';
import { LipStickService } from './lipstick-data';
import {LipstickDialogComponent} from './lipstick-dialog/lipstick-dialog';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LipstickListComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [LipstickListComponent, ToKPipe, ColorChangeDirective,LipstickDialogComponent],
  providers:[LipStickService],
  entryComponents:[LipstickDialogComponent]
})
export class LipstickModule { }
