import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerHomeComponent } from './flower-home/flower-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonDirective } from './sharing/button.directive';
import { ToKPipe } from './sharing/to-k.pipe';
import { MatDialogModule } from '@angular/material';
import { FlowerService } from "./flower-data";
import {FlowerDialogComponent} from './flower-dialog/flower-dialog';


import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {  FlowerDetailComponent } from './flower-detail/flower-detail.component';
@NgModule({
  imports: [
    CommonModule,MatDialogModule, MatTabsModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatButtonModule,
    MatOptionModule,MatCardModule,//模块
  
    RouterModule.forChild([
      { path: '', component: FlowerHomeComponent, pathMatch: 'full' },
      { path: ':id', component: FlowerDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [FlowerHomeComponent,//页面
                ButtonComponent,
                ButtonDirective,
                ToKPipe,
                FlowerDetailComponent,
                FlowerDialogComponent],
  providers:[FlowerService],
  entryComponents:[FlowerDialogComponent]//弹出的ALERT
})
export class FlowerModule { }
