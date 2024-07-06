import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  minNumber: number = 1;
  maxNumber: number = 100;
  secretNumber: number = 0;

  initializeGame(): void {
    this.secretNumber = this.generateRandomNumber();
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
  }

  checkGuess(guess: number): 'high' | 'low' | 'correct' {
    if (guess > this.secretNumber) {
      return 'high';
    } else if (guess < this.secretNumber) {
      return 'low';
    } else {
      return 'correct';
    }
  }
}
