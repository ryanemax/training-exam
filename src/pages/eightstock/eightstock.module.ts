import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EightstockHomeComponent } from './eightstock-home/eightstock-home.component';
import { EightstockListitemComponent } from './eightstock-listitem/eightstock-listitem.component';
import { MarketIndexColorDirective } from './sharing/market-index-color.directive';
import { MoneyUnitPipe } from './sharing/money-unit.pipe';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EightstockHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    EightstockHomeComponent,
    EightstockListitemComponent,
    MarketIndexColorDirective,
    MoneyUnitPipe]
})
export class EightstockModule { }
