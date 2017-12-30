import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WsGoodsHomeComponent } from './ws-goods-home/ws-goods-home.component';
import { WsGoodsListComponent } from './ws-goods-list/ws-goods-list.component';
import { ItalicDirective} from './sharing/Italic.directive';
import { GoodsTypeFilter} from './sharing/goodsTypeFileter.pipe';
import { WsGoodListItemComponent } from './ws-good-list-item/ws-good-list-item.component';
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

import {WsGoodsDialogComponent} from './ws-goods-dialog/ws-goods-dialog';

import { WsGoodsService } from "./ws-goods-data";
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatCardModule,
    MatButtonModule,MatDialogModule,
    RouterModule.forChild([
      { path: '', component: WsGoodsListComponent, pathMatch: 'full' },
      { path: ':id', component: WsGoodsDialogComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [WsGoodsHomeComponent, WsGoodsListComponent,
    ItalicDirective, GoodsTypeFilter, WsGoodListItemComponent, WsGoodsDialogComponent]
    ,
  providers:[WsGoodsService]
})
export class WsGoodsModule { }
