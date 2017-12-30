import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvHomeComponent } from './inv-home/inv-home.component';
import { InvItemComponent } from './inv-item/inv-item.component';
import { InvButtonDirective } from './sharing/inv-button.directive';
import { InvTokPipe } from './sharing/inv-tok.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { ItemService } from "./item-data";
import { MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    RouterModule.forChild([
      { path: '', component: InvHomeComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [InvHomeComponent,InvItemComponent,InvButtonDirective,InvTokPipe],
  providers:[ItemService]
})
export class InvMaterialModule { }
