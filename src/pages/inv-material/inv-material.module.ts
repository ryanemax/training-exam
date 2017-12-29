import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvHomeComponent } from './inv-home/inv-home.component';
import { InvItemComponent } from './inv-item/inv-item.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: InvHomeComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [InvHomeComponent,InvItemComponent]
})
export class InvMaterialModule { }
