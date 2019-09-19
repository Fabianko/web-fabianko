import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-news-object',
  templateUrl: './news-object.component.html',
  styleUrls: ['./news-object.component.less']
})
export class NewsObjectComponent implements OnInit {
  public newsXML;
  constructor() { }

  ngOnInit() {
    this.readNewsByRSS();
  }


  public onClick(e) {
    console.log(e);
  }

  private readNewsByRSS() {
    let xhr = new XMLHttpRequest();
    let url = 'http://www.cooperativa.cl/noticias/site/tax/port/all/rss_5_6_7_1.xml';
     xhr.open('GET', url); // llama al url
     xhr.send();
     //ejecuta primero antes del send
    setTimeout(
      ()=> {
        console.log(xhr.responseText);
        //parsear XML to JSON en JS
        var parser = require('xml2json');
        var json = parser.toJson(xhr.responseText);
           return json;

      },1000
    );



  }

}
