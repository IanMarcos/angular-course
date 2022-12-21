import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackjackDiceComponent } from './blackjack-dice.component';

const routes: Routes = [
  { path:'', component: BlackjackDiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackjackDiceRoutingModule { }
