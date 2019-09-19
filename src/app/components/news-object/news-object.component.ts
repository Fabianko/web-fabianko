import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-object',
  templateUrl: './news-object.component.html',
  styleUrls: ['./news-object.component.less']
})
export class NewsObjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.readNewsByRSS();
  }

  private readNewsByRSS() {
    console.log("hola amor!!");
  }

}
