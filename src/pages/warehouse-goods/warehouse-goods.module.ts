import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseGoodsHomeComponent } from './warehouse-goods-home/warehouse-goods-home.component';
import { WarehouseGoodsDetailComponent } from './warehouse-goods-detail/warehouse-goods-detail.component';
import { RouterModule } from '@angular/router';
import { ShortenStringPipe } from './sharing-pipe/shorten-string.pipe';
import { ActTrDirective } from './sharing-pipe/act-tr.directive';
import { ActWarehouseButtonDirective } from './sharing-pipe/act-warehouse-button.directive';
import { MatButtonModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { WarehouseGoodsService } from "./warehouse-goods-data";


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: WarehouseGoodsHomeComponent, pathMatch: 'full' },
      { path: ':id', component: WarehouseGoodsDetailComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    WarehouseGoodsHomeComponent,
    WarehouseGoodsDetailComponent,
    ShortenStringPipe,    
    ActTrDirective,
    ActWarehouseButtonDirective
  ],
  providers: [WarehouseGoodsService]
})
export class WarehouseGoodsModule { }
