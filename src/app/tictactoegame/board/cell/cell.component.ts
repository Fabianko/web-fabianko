import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  public state: number;

  @Output() changeStateEmitter = new EventEmitter<any>();

  @Input() value: number;

  @Input() i: number;

  @Input() win: number;

  @Input() j: number;

  @Input() end: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  changeState() {
    if (!this.state && !this.win) {
      this.state = this.value;
      console.log({
        'value':this.value,
        'i':this.i,
        'j':this.j
      })
      this.changeStateEmitter.emit(
        {
          'value':this.value,
          'i':this.i,
          'j':this.j
        }
      );
    }
  }

}
