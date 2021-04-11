import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameTicTacToeComponent implements OnInit {
  public winner:number;

  constructor() { }

  ngOnInit(): void {
  }

  validWin(e:boardClass) {
    if (
      this.validHorizontalWin(e.board,e.nowPlayer) ||
      this.validVerticalWin(e.board,e.nowPlayer) ||
      this.validDiagonal1(e.board,e.nowPlayer) ||
      this.validDiagonal2(e.board,e.nowPlayer)
    ) {
      this.winner = e.nowPlayer;
    }
    else {
      return false;
    }
  }


  public validHorizontalWin(board, player) :boolean {
    let i = 0;
    let j = 0;
    while (i < board.length) {
        if (board[i][j] == player) {
            if (j == board.length-1) {
                return true;
            }
            j++;
        }
        else {
            i++;
        }
    }
    return false;
  }

  public validVerticalWin(board,player) :boolean{
    let i = 0;
    let j = 0;
    while (j < board.length) {
        if (board[i][j] == player) {
            if (i == board.length-1) {
                return true;
            }
            i++;
        }
        else {
            j++;
        }
    }
    return false;
  }

  public validDiagonal1(board,player):boolean {
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

  public validDiagonal2(board,player):boolean {
    let i = 0;
    let j = board.length -1;
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
  nowPlayer:number
}
