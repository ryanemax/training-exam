import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeStar1HomeComponent } from './coffee-star1-home/coffee-star1-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ToKPipe } from './sharing/to-k.pipe';
import { ActButtonDirective } from './sharing/act-button.directive';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CoffeeStar1HomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [CoffeeStar1HomeComponent,ToKPipe, ActButtonDirective]
})
export class CoffeeStar1Module { }
