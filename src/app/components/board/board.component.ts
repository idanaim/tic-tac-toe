import {Component, OnInit} from '@angular/core';
import {WINNING_CONDITIONS} from '../../../assets/constants/winning-conditions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public board = Array(9).fill(''); // Init array with 9 cells
  public player = 'X';
  public winner = null;
  public rows = [0, 1, 2];
  public buttonText = 'Reset Game';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Set cell value and block if we have a winner
   * @param position
   */
  action(position) {
    if (!this.winner && !this.board[position]) {
      this.board[position] = this.player;
      if (this.isWinning()) {
        this.winner = this.player;
        this.buttonText = 'New Game';
      }
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }

  /**
   * Check if the value in the the three cells are equal
   * @returns {boolean}
   */
  private isWinning() {
    for (const condition of WINNING_CONDITIONS) {
      if (this.board[condition[0]]
        && this.board[condition[0]] === this.board[condition[1]]
        && this.board[condition[1]] === this.board[condition[2]]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Reset board and winner name
   */
  public newGame() {
    this.board = Array(9).fill('');
    this.winner = null;
    this.player = 'X';
    this.buttonText = 'Reset Game';

  }
}
