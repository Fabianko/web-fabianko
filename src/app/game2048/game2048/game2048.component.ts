import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-game2048',
  templateUrl: './game2048.component.html',
  styleUrls: ['./game2048.component.less']
})
export class Game2048Component implements OnInit {

  @HostListener('window:keydown.arrowleft') arrowleftEvent() {
    this.clickLeft();
  }
  @HostListener('window:keydown.arrowright') arrowrightEvent() {
    this.clickRight();
  }
  @HostListener('window:keydown.arrowup') arrowupEvent() {
    this.clickUp();
  }
  @HostListener('window:keydown.arrowdown') arrowdownEvent() {
    this.clickDown();
  }

  array: number[][];

  maxValue: number = 0;

  inputSize = new FormControl(
    4,
    [
      Validators.min(3),
      Validators.max(8),
      Validators.pattern('[0-9]*')

    ], []);

  endGame = false;

  winner = false;

  sizeArray: number = 4;

  countMoviments: number = 0;


  history: number[][][] = [];


  constructor() { }

  ngOnInit(): void {
    this.configInit();
  }


  public configInit() {
    this.countMoviments = 0;
    this.winner = false;
    this.endGame = false;
    this.history = [];
    this.array = this.createArray(this.sizeArray);

    this.array = this.randomInCeros(this.array, this.sizeArray);

    this.history.push(JSON.parse(JSON.stringify(this.array)));
    this.getMaxValue(this.array);
  }


  public backButton() {

    this.array = JSON.parse(JSON.stringify(this.history[this.countMoviments - 1]));
    this.endGame = false;
    this.winner = false;
    this.countMoviments -= 1;
    this.getMaxValue(this.array);
  }

  public changeSize() {
    if (this.inputSize.status === "VALID") {
      this.sizeArray = this.inputSize.value;
      this.configInit();
    }
  }

  public clickUp() {

    let matrix: number[][] = JSON.parse(JSON.stringify(this.moveUp(this.array)));
    this.nextStep(matrix);
  }

  public clickDown() {
    let matrix: number[][] = JSON.parse(JSON.stringify(this.moveDown(this.array)));
    this.nextStep(matrix);
  }

  public clickLeft() {
    let matrix: number[][] = JSON.parse(JSON.stringify(this.moveLeft(this.array)));
    this.nextStep(matrix);
  }

  public clickRight() {
    let matrix: number[][] = JSON.parse(JSON.stringify(this.moveRight(this.array)));
    this.nextStep(matrix);
  }


  public getMaxValue(matrix: number[][]) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > this.maxValue) {
          this.maxValue = matrix[i][j];
        }
      }
    }
  }


  public nextStep(matrix: number[][]) {

    if (this.history[this.countMoviments].toString() == matrix.toString()) {
      return 0;
    }
    else {
      this.array = JSON.parse(JSON.stringify(matrix));
      this.countMoviments += 1;

      this.array = JSON.parse(JSON.stringify(this.randomInCeros(this.array, this.sizeArray)));
      this.history.push(JSON.parse(JSON.stringify(this.array)));
      this.getMaxValue(this.array);
      if (this.isEnd(this.array, this.sizeArray)) {
        console.log("termino el juego");
        this.endGame = true;

        return 0;
      }
      if (this.maxValue == 2048) {
        this.winner = true;

        return 0;
      }
    }
    return 0;
  }

  public createArray(size: number): number[][] {
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


  public getCeros(matrix, size) {
    let ceros = [];
    let i = 0;
    while (i < size) {
      let j = 0;
      while (j < size) {

        if (matrix[i][j] == 0) {
          ceros.push({ 'i': i, 'j': j });
        }
        j = j + 1;
      }
      i = i + 1;
    }
    return ceros;
  }

  //condicion de termino del juego

  public isEnd(matrix: number[][], size: number): boolean {
    let ceros = this.getCeros(matrix, size);
    if (ceros.length === 0) {
      if (
        this.getCeros(this.moveUp(JSON.parse(JSON.stringify(matrix))), size).length > 0 ||
        this.getCeros(this.moveDown(JSON.parse(JSON.stringify(matrix))), size).length > 0 ||
        this.getCeros(this.moveLeft(JSON.parse(JSON.stringify(matrix))), size).length > 0 ||
        this.getCeros(this.moveRight(JSON.parse(JSON.stringify(matrix))), size).length > 0
      ) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
  }

  public randomInCeros(matrix: number[][], size: number): number[][] {
    let ceros = this.getCeros(matrix, size);
    if (ceros.length == 0) {
      return matrix;
    }
    let selected = Math.floor(Math.random() * (ceros.length - 0)) + 0;
    let i = ceros[selected]['i'];
    let j = ceros[selected]['j'];
    matrix[i][j] = 2;
    return matrix;
  }

  public moveRight(array: number[][]): number[][] {

    let matrix: number[][] = [];
    for (let index = 0; index < array.length; index++) {
      const row = array[index];
      matrix[index] = this.moveRightRow(row);
    }
    return this.transpose(this.transpose(matrix));
  }

  public moveLeft(array: number[][]): number[][] {

    let matrix: number[][] = [];
    for (let index = 0; index < array.length; index++) {
      const row = array[index];
      matrix[index] = this.moveLeftRow(row);
    }
    return this.transpose(this.transpose(matrix));
  }

  public moveUp(array: number[][]): number[][] {
    array = this.transpose(array);

    let matrix: number[][] = [];

    for (let index = 0; index < array.length; index++) {
      const row = array[index];
      matrix[index] = this.moveLeftRow(row);
    }
    return this.transpose(matrix);
  }

  public moveDown(array: number[][]): number[][] {
    array = this.transpose(array);

    let matrix: number[][] = [];

    for (let index = 0; index < array.length; index++) {
      const row = array[index];
      matrix[index] = this.moveRightRow(row);
    }
    return this.transpose(matrix);
  }

  /* También esta función resuelve movimientos Down mediante transpose*/

  public moveRightRow(array: number[]): number[] {
    var i = array.length - 1;
    var countRev = 0;
    while (i > 0 && countRev < array.length) {
      if (array[i] === 0) {
        array.splice(i, 1);
        array.unshift(0);
        i = i + 1;
      }
      countRev += 1
      i = i - 1;
    }
    i = array.length - 1;
    while (i > 0) {
      if (array[i] == 0) {
        i = -2;
      }
      else {
        if (array[i] == array[i - 1]) {
          array[i] = array[i - 1] + array[i];
          array.splice(i - 1, 1);
          array.unshift(0);
        }
      }
      i = i - 1;

    }
    return array;
  }

  /* También esta función resuelve movimientos UP mediante transpose */
  public moveLeftRow(array: number[]): number[] {
    var i = 0;
    var countRev = 0;
    while (i < array.length && countRev < array.length) {
      if (array[i] === 0) {
        array.splice(i, 1);
        array.push(0);
        i = i - 1;
      }
      countRev += 1
      i = i + 1;
    }
    i = 0;
    while (i < array.length) {
      if (array[i] == 0) {
        i = array.length + 1;
      }
      else {
        if (array[i] == array[i + 1]) {
          array[i] = array[i + 1] + array[i];
          array.splice(i + 1, 1);
          array.push(0);
        }
      }
      i = i + 1;

    }
    return array;
  }

  transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  }

  // thanks: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
}
