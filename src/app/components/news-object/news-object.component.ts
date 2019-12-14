import { Component, OnInit  } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-news-object',
  templateUrl: './news-object.component.html',
  styleUrls: ['./news-object.component.less']
})
export class NewsObjectComponent implements OnInit {
  public newsJson: any = {};
  constructor(private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {
    this.readNewsByRSS();
  }
  public allNews = [];

  public onClick(e) {
    console.log(e);
  }

  private readNewsByRSS() {
    let xhr = new XMLHttpRequest();
    let url = 'https://www.cooperativa.cl/noticias/site/tax/port/all/rss____1.xml';

    xhr.open('GET', url, true); // llama al url
    //xhr.setRequestHeader('Content-Type', 'application/xml');
    //xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://www.cooperativa.cl');

    xhr.send();
    //ejecuta primero antes del send
    setTimeout(
      ()=> {

        if (xhr.responseText === '') {
          console.log(xhr);
          return;
        }
        //console.log(xhr.responseText);
        //parsear XML to JSON en JS
        const parser = new DOMParser();
        console.log(xhr.responseText);
        const xml = parser.parseFromString(xhr.responseText, 'text/xml');
        const obj:any = this.ngxXml2jsonService.xmlToJson(xml);
        //this.newsJson['fuentes'] = obj['rss']['channel']['description'];
        //this.newsJson ['noticias'] = obj ['rss']['channel']['item'] ;
        let i = 0;
        i = Math.floor(Math.random() * 10);
        console.log(obj);
        this.newsJson['fuente'] = obj.rss.channel.description;
        this.allNews = obj.rss.channel.item;
        this.newsJson ['noticias'] = obj.rss.channel.item[i];
        if (this.newsJson['noticias']['prontus_fotolibre'] && typeof this.newsJson['noticias']['prontus_fotolibre'] === 'string') {
          this.newsJson['imgNoticia'] = this.newsJson['noticias']['prontus_fotolibre'];
          console.log(this.newsJson['imgNoticia']);
        }
        console.log(this.newsJson);
      }, 1000
    );



  }

}
