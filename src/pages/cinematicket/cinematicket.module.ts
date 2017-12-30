import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinematicketHomeComponent } from './cinematicket-home/cinematicket-home.component';
import { CinematicketItemComponent } from './cinematicket-item/cinematicket-item.component';
import {Routes,RouterModule} from '@angular/router';
import { ActButtonDirestive } from './sharing/act-button.directive';
import { ToKPipe } from './sharing/to-k.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CinematicketHomeComponent, pathMatch: 'full'},
    ])
  ],
  declarations: [
    CinematicketHomeComponent,
    CinematicketItemComponent,
    ActButtonDirestive,
    ToKPipe]
})
export class CinematicketModule {}
