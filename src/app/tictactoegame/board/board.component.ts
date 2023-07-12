import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  array: number[][];
  arrayGame: number[][];
  maxValue: number = 0;
  sizeArray: number = 3;
  player: number = 1;
  @Input() winner: number;
  @Input() endGame: boolean;
  @Output() gameChangeBoard = new EventEmitter<any>();
  @Output() reloadGame = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.configInit();
  }
  public configInit(){
    this.player = 1;
    this.array = undefined;
    this.winner = undefined;
    this.arrayGame = undefined;
    this.array = this.createArray(this.sizeArray);
    this.arrayGame = this.createArray(this.sizeArray);
    this.endGame = false;
    this.reloadGame.emit(true);
    
  }

  public createArray(size: number):  number[][] {
    var i = 0;
    var matrix: number[][] = [];
    while (i < size) {
      let j = 0;
      while (j < size) {
        if (!matrix[i]) {
          matrix[i] = [];
        }
        matrix[i][j] = 0;
        j = j + 1;
      }
      i = i + 1;
    }
    return matrix;
  }

  public nextPlayer(result) {
    this.arrayGame[result.i][result.j] = result.value;
    this.gameChangeBoard.emit(
      {
        'board':this.arrayGame,
        'nowPlayer': this.player
      }
      );
    this.player = this.player == 1 ? 2 : 1;
  }
}
