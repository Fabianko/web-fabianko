import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/api/bd/data.json';
import { itemDto } from './dtos/itemDto';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit {
  dataBd:itemDto[];
  constructor() { }

  ngOnInit() {
    this.dataBd = data['default'];
    console.log(data);
  }

}
