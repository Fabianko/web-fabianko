import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameTicTacToeComponent implements OnInit {

  public winner: number;


  constructor() { }

  ngOnInit(): void {
  }


  validWin(e: boardClass) {
    let validateHorizontal = this.validHorizontalWin(e.board, e.nowPlayer);
    let validateVertical = this.validVerticalWin(e.board, e.nowPlayer);
    let validateDiagonal1 = this.validDiagonal1(e.board, e.nowPlayer);
    let validateDiagonal2 = this.validDiagonal2(e.board, e.nowPlayer);
    if (
      validateHorizontal ||
      validateVertical ||
      validateDiagonal1 ||
      validateDiagonal2
    ) {
      this.winner = e.nowPlayer;
      return true;
    }
    else {
      return false;
    }
  }


  public validHorizontalWin(board: number[][], player: number): boolean {
    for (let i = 0; i < board.length; i++) {
      let j = 0;
      while (j < board[i].length) {
        if (board[i][j] == player) {
          if (j == board[i].length - 1) {
            return true;
          }
          j++;
        } else {
          break;
        }
      }
    }
    return false;
  }
  
  public validVerticalWin(board: number[][], player: number): boolean {
    for (let j = 0; j < board.length; j++) {
      let i = 0;
      while (i < board[j].length) {
        if (board[i][j] == player) {
          if (i == board[j].length - 1) {
            return true;
          }
          i++;
        } else {
          break;
        }
      }
    }
    return false;
  }


  public validDiagonal1(board: number[][], player: number): boolean {
    let i = 0;
    let j = 0;
    while (j < board.length) {

      if (board[i][j] != player) {
        return false;
      }
      i++;
      j++;

    }
    return true;
  }


  public validDiagonal2(board: number[][], player: number): boolean {
    let i = 0;
    let j = board.length - 1;
    while (i < board.length) {

      if (board[i][j] != player) {
        return false;
      }
      i++;
      j--;

    }
    return true;
  }


}

export class boardClass {
  board: number[][]
  nowPlayer: number
}
