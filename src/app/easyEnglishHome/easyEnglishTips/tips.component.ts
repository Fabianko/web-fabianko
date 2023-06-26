import { Component, OnInit, Pipe } from '@angular/core';
import * as data from '../../../assets/api/tips/tips.json';

@Component({
  selector: 'tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.less'],
})
export class TipsComponent implements OnInit {
  selected: any;
  data: any;
  originalData: any;
  constructor() {}

  ngOnInit() {
    this.originalData = data['default'];
    this.data = data['default'];
    this.random();
  }
  public random() {
    if (this.selected) {
      //eliminar el objeto seleccionado de data, para que no se repita
      this.data = this.data.filter((item) => item !== this.selected);
      this.selected = undefined;
    }
    setTimeout(() => {
      this.selected =
        this.data[Math.floor(Math.random() * this.data.length)];
    }, 0);
  }
  public reloadData() {
    this.data = data['default'];
    this.random();
  }
}
