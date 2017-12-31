import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Clothes1HomeListComponent } from './clothes1-home-list/clothes1-home-list.component';
import { Clothes1HomeComponent } from './clothes1-home/clothes1-home.component';
import { Clothes1HomeItemComponent } from './clothes1-home-item/clothes1-home-item.component';
import { ToKPipe } from './sharing/to-k.pipe';
import { ActButtonDirective } from './sharing/act-button.directive';
import { ActCardDirective } from './sharing/act-card.directive';

import { ActButtonComponent } from './act-button/act-button.component';

import { Say666Pipe } from './sharing/say-666.pipe';

import { HightLightDirective } from './sharing/highlight.directive';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

import { Clothes1Service } from "./clothes1-data";
import {Clothes1DialogComponent} from './clothes1-dialog/clothes1-dialog';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatCardModule,
    MatButtonModule,MatDialogModule,
    RouterModule.forChild([
      { path: '', component: Clothes1HomeListComponent, pathMatch: 'full' },
      { path: ':id', component: Clothes1HomeComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    Clothes1HomeListComponent,
    Clothes1HomeComponent,
    Clothes1HomeItemComponent,
    ToKPipe,
    Say666Pipe,
    ActButtonDirective,
    ActCardDirective,
    HightLightDirective,
    ActButtonComponent,
    Clothes1DialogComponent
  ],
  providers:[Clothes1Service],
  entryComponents:[Clothes1DialogComponent]
})
export class Clothes1Module { }
