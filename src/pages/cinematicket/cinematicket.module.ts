import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinematicketHomeComponent } from './cinematicket-home/cinematicket-home.component';
import { CinematicketItemComponent } from './cinematicket-item/cinematicket-item.component';
import {Routes,RouterModule} from '@angular/router';
import { ActButtonDirestive } from './sharing/act-button.directive';
import { ToKPipe } from './sharing/to-k.pipe';
import { CinemaService } from './cinematicket-data';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { CinematicketDialogComponent } from './cinematicket-dialog/cinematicket-dialog.component'
import { MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MatFormFieldModule,MatDialogModule,
    MatIconModule,MatMenuModule,MatCardModule,MatButtonModule,FormsModule,MatInputModule,MatSelectModule,MatOptionModule,
    RouterModule.forChild([
      {path: '', component: CinematicketHomeComponent, pathMatch: 'full'},
      {path: ':objectId', component: CinematicketItemComponent, pathMatch: 'full'},
    ])
  ],
  declarations: [
    CinematicketHomeComponent,
    CinematicketItemComponent,
    ActButtonDirestive,
    ToKPipe,
    CinematicketDialogComponent

  ],
  providers:[CinemaService],
  entryComponents:[CinematicketDialogComponent]
})
export class CinematicketModule { }
