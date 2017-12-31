import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvHomeComponent } from './inv-home/inv-home.component';
import { InvButtonDirective } from './sharing/inv-button.directive';
import { InvTokPipe } from './sharing/inv-tok.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { ItemService } from "./services/item-data";
import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {ItemDialogComponent} from './item-dialog/item-dialog';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      { path: '', component: InvHomeComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [InvHomeComponent,InvButtonDirective,InvTokPipe,ItemDialogComponent],
  providers:[ItemService],
  entryComponents:[ItemDialogComponent]
})
export class InvMaterialModule { }
