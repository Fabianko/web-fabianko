import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/api/bd/data.json';
import { itemDto } from './dtos/itemDto';

@Component({
  selector: 'app-web-bd',
  templateUrl: './web-bd.component.html',
  styleUrls: ['./web-bd.component.less']
})
export class WebBdComponent implements OnInit {
  dataBd:itemDto[];
  constructor() { }

  ngOnInit() {
    this.dataBd = data['default'];
    console.log(data);
  }

}
