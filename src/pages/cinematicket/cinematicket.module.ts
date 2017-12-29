import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinematicketHomeComponent } from './cinematicket-home/cinematicket-home.component';
import {Routes,RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CinematicketHomeComponent, pathMatch: 'full'},
    ])
  ],
  declarations: [CinematicketHomeComponent]
})
export class CinematicketModule { }
