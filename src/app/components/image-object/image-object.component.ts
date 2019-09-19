import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-object',
  templateUrl: './image-object.component.html',
  styleUrls: ['./image-object.component.less']
})
export class ImageObjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public onClick(e) {
    console.log(e);
  }
}
