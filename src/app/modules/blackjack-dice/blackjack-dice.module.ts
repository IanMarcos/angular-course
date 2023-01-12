import { NgModule } from '@angular/core';

import { BlackjackDiceRoutingModule } from './blackjack-dice-routing.module';
import { BlackjackDiceComponent } from './blackjack-dice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlackjackDiceComponent
  ],
  imports: [
    SharedModule,
    BlackjackDiceRoutingModule
  ]
})
export class BlackjackDiceModule { }
