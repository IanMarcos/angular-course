import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PianoRoutingModule } from './piano-routing.module';
import { PianoComponent } from './piano.component';


@NgModule({
  declarations: [
    PianoComponent
  ],
  imports: [
    CommonModule,
    PianoRoutingModule
  ]
})
export class PianoModule { }
