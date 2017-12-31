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
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StudentService } from './coffee-star1-data.ts';
import {StudentDialogComponent} from './student-dialog/student-dialog';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { CoffeeDetailComponent } from './coffee-star1-detail/coffee-star1-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,
    MatCardModule,
    MatButtonModule,MatDialogModule,
   
    RouterModule.forChild([
      { path: '', component: CoffeeStar1HomeComponent, pathMatch: 'full' },
      { path: ':id', component:CoffeeDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [CoffeeStar1HomeComponent,
    ToKPipe, ActButtonDirective,StudentDialogComponent, StudentDialogComponent, CoffeeDetailComponent,],
    providers:[StudentService],
    entryComponents:[StudentDialogComponent]
})
export class CoffeeStar1Module { }
