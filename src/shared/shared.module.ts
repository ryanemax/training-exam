import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToKPipe } from './to-k.pipe';
import { ActButtonDirective } from './act-button.directive';
import { ActCardDirective } from './act-card.directive';
import { HightLightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToKPipe,    
    ActButtonDirective,
    ActCardDirective,
    HightLightDirective,
  ],
  exports:[
    ToKPipe,    
    ActButtonDirective,
    ActCardDirective,
    HightLightDirective,
  ]
})
export class SharedModule { }
