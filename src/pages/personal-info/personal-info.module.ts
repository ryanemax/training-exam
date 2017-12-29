import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoHomeComponent } from './personal-info-home/personal-info-home.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PersonalInfoHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [PersonalInfoHomeComponent]
})
export class PersonalInfoModule { }
