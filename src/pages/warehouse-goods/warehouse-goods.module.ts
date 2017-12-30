import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseGoodsHomeComponent } from './warehouse-goods-home/warehouse-goods-home.component';
import { RouterModule } from '@angular/router';
import { ShortenStringPipe } from './sharing-pipe/shorten-string.pipe';
import { ActTrDirective } from './sharing-pipe/act-tr.directive';
import { ActWarehouseButtonDirective } from './sharing-pipe/act-warehouse-button.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WarehouseGoodsHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    WarehouseGoodsHomeComponent,
    ShortenStringPipe,    
    ActTrDirective,
    ActWarehouseButtonDirective
  ]
})
export class WarehouseGoodsModule { }
