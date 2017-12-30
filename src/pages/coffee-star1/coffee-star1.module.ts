import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeStar1HomeComponent } from './coffee-star1-home/coffee-star1-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ToKPipe } from './sharing/to-k.pipe';
import { ActButtonDirective } from './sharing/act-button.directive';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,
    RouterModule.forChild([
      { path: '', component: CoffeeStar1HomeComponent, pathMatch: 'full' },
      
    ])
  ],
  declarations: [CoffeeStar1HomeComponent,
    ToKPipe, ActButtonDirective]
})
export class CoffeeStar1Module { }
