import { Component, OnInit  } from '@angular/core';

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
    let xhr2 = new XMLHttpRequest();
    let url = 'https://www.cooperativa.cl/noticias/site/tax/port/all/rss____1.xml';
    let url2 = 'https://www.xataka.com/index.xml';

    xhr.open('GET', url, true); // llama al url
    xhr2.open('GET',url2, true);
    
    //xhr.setRequestHeader('Content-Type', 'application/xml');
    //xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://www.cooperativa.cl');

    xhr.send();
    xhr2.send();

    //ejecuta primero antes del send
    setTimeout(
      () => {
        if (xhr.responseText === '') {
          console.log(xhr);
          console.log(xhr2);
          return;
        }
        console.log(xhr2);
        //console.log(xhr.responseText);
        //parsear XML to JSON en JS
        const parser = new DOMParser();
        console.log(xhr.responseText);
        const xmlData = parser.parseFromString(xhr.responseText, 'text/xml');
        //transform xml to json in obj function
        let obj = this.xmlToJson(xhr.responseXML);
        


        

        //this.newsJson['fuentes'] = obj['rss']['channel']['description'];
        //this.newsJson ['noticias'] = obj ['rss']['channel']['item'] ;
        let i = 0;
        i = Math.floor(Math.random() * 10);
        console.log(obj);
        this.newsJson['fuente'] = obj.rss.channel.description;
        this.allNews = obj.rss.channel.item;
        this.newsJson['noticias'] = obj.rss.channel.item;

        /*
        if (this.newsJson['noticias']['prontus_fotolibre'] && typeof this.newsJson['noticias']['prontus_fotolibre'] === 'string') {
          this.newsJson['imgNoticia'] = this.newsJson['noticias']['prontus_fotolibre'];
          console.log(this.newsJson['imgNoticia']);
        }
        */
        console.log(this.newsJson);
      }, 1000
    );
  }

  //transform xml to json in obj function
  private xmlToJson(xml) {
    return JSON.parse(JSON.stringify(xml));
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
