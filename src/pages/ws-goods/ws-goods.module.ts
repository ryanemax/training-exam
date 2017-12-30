import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WsGoodsHomeComponent } from './ws-goods-home/ws-goods-home.component';
import { WsGoodsListComponent } from './ws-goods-list/ws-goods-list.component';
import { ItalicDirective} from './sharing/Italic.directive';
import { GoodsTypeFilter} from './sharing/goodsTypeFileter.pipe';
import { WsGoodListItemComponent } from './ws-good-list-item/ws-good-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WsGoodsListComponent, pathMatch: 'full' }// ,
   //   { path: 'list', component: WsGoodsListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [WsGoodsHomeComponent, WsGoodsListComponent,
    ItalicDirective, GoodsTypeFilter, WsGoodListItemComponent]
})
export class WsGoodsModule { }
