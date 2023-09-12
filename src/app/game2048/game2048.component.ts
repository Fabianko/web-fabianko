import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storate.service';

@Component({
  selector: 'game-2048',
  templateUrl: './game2048.component.html',
  styleUrls: ['./game2048.component.less']
})
export class GameComponent implements OnInit {

  public maxSize:number=3;
  public matriz:any = {};
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.createNewMatriz();
    console.log(this.getCeros());
    this.randomInCeros();
    console.log(this.matriz)
  }

  private createNewMatriz() {
    this.matriz = {};
    let i = 0;
    while (i < this.maxSize) {
      let j = 0;
      while (j < this.maxSize) {
        if (!this.matriz[i]) {
          this.matriz[i] = {};
        }
        this.matriz[i][j] = 0;
        j = j + 1;
      }
      i = i + 1;
    }
    console.log(this.matriz)
  }

  private getCeros() {
    let ceros = [];
    let i = 0;
    while (i < this.maxSize) {
      let j = 0;
      while (j < this.maxSize) {
        if (this.matriz[i][j]==0) {
         ceros.push({'i':i,'j':j});
        }
        j = j + 1;
      }
      i = i + 1;
    }
    return ceros;
  }

  private randomInCeros() {
    let ceros = this.getCeros()
    let selected = Math.floor(Math.random() * (ceros.length - 0)) + 0;
    let i = ceros[selected]['i'];
    let j = ceros[selected]['j'];
    this.matriz[i][j] = 2;
  }

  
}
