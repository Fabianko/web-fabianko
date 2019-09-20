import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-object',
  templateUrl: './image-object.component.html',
  styleUrls: ['./image-object.component.less']
})
export class ImageObjectComponent implements OnInit {
  public number = 1;
  constructor() { }

  ngOnInit() {
    this.number = Math.floor(Math.random() * 10);
  }


  public onClick(e) {
    console.log(e);
  }
}
