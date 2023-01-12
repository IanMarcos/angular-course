import { NgModule } from '@angular/core';

import { PianoRoutingModule } from './piano-routing.module';
import { PianoComponent } from './piano.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PianoComponent
  ],
  imports: [
    SharedModule,
    PianoRoutingModule
  ]
})
export class PianoModule { }
