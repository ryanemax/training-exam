import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EightstockHomeComponent } from './eightstock-home/eightstock-home.component';
import { EightstockDetailComponent } from './eightstock-detail/eightstock-detail.component';
import { EightstockListitemComponent } from './eightstock-listitem/eightstock-listitem.component';
import { EightstockNewschatComponent } from './eightstock-newschat/eightstock-newschat.component';
import { MarketIndexColorDirective } from './sharing/market-index-color.directive';
import { MoneyUnitPipe } from './sharing/money-unit.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';

import {Parse} from "../../cloud/cloud";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: EightstockHomeComponent, pathMatch: 'full' },
      { path: ':id', component: EightstockDetailComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    EightstockHomeComponent,
    EightstockDetailComponent,
    EightstockListitemComponent,
    EightstockNewschatComponent,
    MarketIndexColorDirective,
    MoneyUnitPipe],
    entryComponents:[EightstockNewschatComponent]
})
export class EightstockModule { }
