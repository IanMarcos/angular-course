import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackjackDiceRoutingModule } from './blackjack-dice-routing.module';
import { BlackjackDiceComponent } from './blackjack-dice.component';


@NgModule({
  declarations: [
    BlackjackDiceComponent
  ],
  imports: [
    CommonModule,
    BlackjackDiceRoutingModule
  ]
})
export class BlackjackDiceModule { }
