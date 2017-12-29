import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WsGoodsHomeComponent } from './ws-goods-home/ws-goods-home.component';
import { WsGoodsListComponent } from './ws-goods-list/ws-goods-list.component';
import { WsGoodsDetailComponent } from './ws-goods-detail/ws-goods-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WsGoodsHomeComponent, pathMatch: 'full' },
      { path: 'list', component: WsGoodsListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [WsGoodsHomeComponent, 
    WsGoodsListComponent, 
    WsGoodsDetailComponent]
})
export class WsGoodsModule { }