import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvHomeComponent } from './inv-home/inv-home.component';
import { InvItemComponent } from './inv-item/inv-item.component';
import { InvButtonDirective } from './sharing/inv-button.directive';
import { InvTokPipe } from './sharing/inv-tok.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: '', component: InvHomeComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [InvHomeComponent,InvItemComponent,InvButtonDirective,InvTokPipe]
})
export class InvMaterialModule { }
