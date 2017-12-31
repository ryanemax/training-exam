import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseGoodsHomeComponent } from './warehouse-goods-home/warehouse-goods-home.component';
import { WarehouseGoodsDetailComponent } from './warehouse-goods-detail/warehouse-goods-detail.component';
import { WarehouseGoodsService } from "./warehouse-goods-data";
import { WarehouseGoodsAddupdDialogComponent} from './warehouse-goods-dialog/warehouse-goods-addupd';
import { RouterModule } from '@angular/router';
import { ShortenStringPipe } from './sharing-pipe/shorten-string.pipe';
import { ActTrDirective } from './sharing-pipe/act-tr.directive';
import { ActWarehouseButtonDirective } from './sharing-pipe/act-warehouse-button.directive';
import { MatButtonModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: WarehouseGoodsHomeComponent, pathMatch: 'full' },
      { path: ':id', component: WarehouseGoodsDetailComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    WarehouseGoodsHomeComponent,
    WarehouseGoodsDetailComponent,
    WarehouseGoodsAddupdDialogComponent,
    ShortenStringPipe,    
    ActTrDirective,
    ActWarehouseButtonDirective
  ],
  providers: [WarehouseGoodsService],
  entryComponents:[WarehouseGoodsAddupdDialogComponent]
})
export class WarehouseGoodsModule { }
