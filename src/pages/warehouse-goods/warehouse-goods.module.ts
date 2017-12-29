import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseGoodsHomeComponent } from './warehouse-goods-home/warehouse-goods-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WarehouseGoodsHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [WarehouseGoodsHomeComponent]
})
export class WarehouseGoodsModule { }
