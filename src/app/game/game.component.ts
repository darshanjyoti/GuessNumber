import { Component, OnInit } from '@angular/core';
import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  guess: number = 0;
  feedback: string = '';
  attempts: number = 0;
  isGameWon: boolean = false;

  constructor(public gameLogicService: GameLogicService) {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    this.gameLogicService.initializeGame();
    this.attempts = 0;
    this.isGameWon = false;
    this.feedback = '';
  }

  makeGuess(): void {
    if (this.guess === 0 || this.isGameWon) {
      return;
    }
    this.attempts++;
    const result = this.gameLogicService.checkGuess(this.guess);
    if (result === 'correct') {
      this.isGameWon = true;
      this.feedback = `Congratulations!  It took you ${this.attempts} attempts to guess this number.`;
    } else if (result === 'high') {
      this.feedback = 'Too high! Try a lower number.';
    } else if (result === 'low') {
      this.feedback = 'Too low! Try a higher number.';
    }
   // this.guess = 0; // Reset guess input
  }
}

