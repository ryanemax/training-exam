import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EightstockHomeComponent } from './eightstock-home/eightstock-home.component';
import { EightstockDetailComponent } from './eightstock-detail/eightstock-detail.component';
import { EightstockListitemComponent } from './eightstock-listitem/eightstock-listitem.component';
import { MarketIndexColorDirective } from './sharing/market-index-color.directive';
import { MoneyUnitPipe } from './sharing/money-unit.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      { path: '', component: EightstockHomeComponent, pathMatch: 'full' },
      { path: ':id', component: EightstockDetailComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    EightstockHomeComponent,
    EightstockDetailComponent,
    EightstockListitemComponent,
    MarketIndexColorDirective,
    MoneyUnitPipe]
})
export class EightstockModule { }
