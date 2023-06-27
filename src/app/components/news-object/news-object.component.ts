import { Component, OnInit  } from '@angular/core';
import { xml2json } from 'xml-js';
@Component({
  selector: 'app-news-object',
  templateUrl: './news-object.component.html',
  styleUrls: ['./news-object.component.less']
})
export class NewsObjectComponent implements OnInit {

  public newsJson: any = {};

  public objectEmpty = {};

  constructor() { }

  ngOnInit() {
    this.readNewsByRSS();
  }

  public allNews = [];

  public reloadNews: boolean = true;

  public onClick(e) {
    console.log(e);
  }

  private readNewsByRSS() {
    let xhr = new XMLHttpRequest();
    let url = 'https://www.cooperativa.cl/noticias/site/tax/port/all/rss____1.xml';


    xhr.open('GET', url, true); // llama al url


    xhr.send();



    setTimeout(
      () => {
        if (xhr.responseText === '') {
         
          return;
        }
        const parser = new DOMParser();
        let obj:any = xml2json(xhr.responseText, { compact: true });
        obj = JSON.parse(obj);
        this.newsJson['fuente'] = obj.rss.channel.description;
        this.allNews = obj.rss.channel.item;
        this.newsJson['noticias'] = obj.rss.channel.item;
      }, 1000
    );
  }
  




  public nextObject() {
    this.reloadNews = true;
    let i = 0;
    i = Math.floor(Math.random() * 10);
    this.newsJson ['noticias'] = this.allNews[i];
    if (this.newsJson['noticias']['prontus_fotolibre'] && typeof this.newsJson['noticias']['prontus_fotolibre'] === 'string') {
      this.newsJson['imgNoticia'] = this.newsJson['noticias']['prontus_fotolibre'];
      console.log(this.newsJson['imgNoticia']);
    }
    this.reloadNews = false;
  }
}
