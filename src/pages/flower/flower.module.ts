import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerHomeComponent } from './flower-home/flower-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonDirective } from './sharing/button.directive';
import { ToKPipe } from './sharing/to-k.pipe';

import { FlowerService } from "./flower-data";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FlowerHomeComponent, pathMatch: 'full' },
    
    ])
  ],
  declarations: [FlowerHomeComponent,ButtonComponent,ButtonDirective,ToKPipe],
  providers:[FlowerService]
})
export class FlowerModule { }
