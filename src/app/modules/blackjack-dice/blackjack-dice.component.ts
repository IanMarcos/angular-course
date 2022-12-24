import { Component } from '@angular/core';

const IMGS_PATH = '../../../assets/imgs/blackjack/face';

@Component({
  selector: 'app-blackjack-dice',
  templateUrl: './blackjack-dice.component.html'
})
export class BlackjackDiceComponent {
  leftDice: number;
  rigthDice: number;
  leftDiceImg: string;
  rigthDiceImg: string;
  score: number;
  gameState: string;
  rigthDiceRendered: boolean;

  constructor() {
    this.leftDice = this.generateRandomDiceNum();
    this.rigthDice = this.generateRandomDiceNum();
    this.leftDiceImg = IMGS_PATH + this.leftDice + '.svg';
    this.rigthDiceImg =  IMGS_PATH + this.rigthDice + '.svg';
    this.score = 0;
    this.gameState = 'playing';
    this.rigthDiceRendered = true;
  }

  public handleRollDice() {
    if (this.score >= 17) {
      this.rigthDiceRendered = false;
    }

    this.leftDice = this.generateRandomDiceNum();
    this.rigthDice = this.generateRandomDiceNum();

    this.setDiceImages();

    if (this.rigthDiceRendered) {
      this.score += this.leftDice + this.rigthDice;
    } else {
      this.score += this.leftDice;
    }
    
    if (this.score === 21) {
      this.gameState = 'blackjack';
    }
    if (this.score > 21) {
      this.gameState = 'lost';
    }
  }

  public handleStay() {
    this.gameState = 'finished';
  }

  public handleGameReset() {
    this.score = 0;
    this.rigthDiceRendered = true;
    this.leftDice = this.generateRandomDiceNum();
    this.rigthDice = this.generateRandomDiceNum();
    this.gameState = 'playing';
  }

  private generateRandomDiceNum: Function = () => Math.ceil(Math.random() * 6);

  private setDiceImages() {
    this.leftDiceImg = IMGS_PATH + this.leftDice + '.svg';
    this.rigthDiceImg =  IMGS_PATH + this.rigthDice + '.svg';
  }
}
