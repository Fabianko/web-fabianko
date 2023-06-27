import { Component, OnInit } from '@angular/core';
import { xml2json } from 'xml-js';

@Component({
  selector: 'app-news2-object',
  templateUrl: './news2-object.component.html',
  styleUrls: ['./news2-object.component.less'],
})
export class News2ObjectComponent implements OnInit {
  url = 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/america/portada';
  constructor() {}
  newSelected = undefined
  public allNews = [];
  ngOnInit() {
    this.getAllNewsByUrl();
  }

  selectNews(newSelected) {

    this.newSelected = undefined
    setTimeout(() => {
      this.newSelected = newSelected
    }, 0);
  }
  
  getAllNewsByUrl() {
    let tempList = [];
    console.log('getAllNewsByUrl');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', this.url, true); // llama al url
    xhr.send();
    //ejecuta primero antes del send
    setTimeout(() => {
      if (xhr.responseText === '') {
        console.log(xhr);
        return;
      }
      const parser = new DOMParser();
      let obj: any = xml2json(xhr.responseText, { compact: true });
      obj = JSON.parse(obj);
      console.log(obj);
      tempList = obj.rss.channel.item;
      for (let n of tempList) {
        let temp = {
          link: n.guid?._text,
          title: n.title?._text,
          description: n.description?._text,
          datetime: n.pubDate?._text,
          image: undefined,
          video: undefined,
        };
        if (n['media:content'] && n['media:content']['media:thumbnail']) {
          temp.image = n['media:content']['media:thumbnail']._attributes?.url;
        }
        if (n['media:content']?._attributes?.medium === 'image') {
          temp.image = n['media:content']?._attributes?.url;
        }
        if (n['media:content']?._attributes?.medium === 'video') {
          temp.video = n['media:content']._attributes?.url;
        }
        this.allNews.push(temp);
      }
      //sort by datetime
      this.allNews.sort((a, b) => {
        return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
      });
    }, 2000);
  }
  public onClick(e) {
    console.log(e);
  }
}
