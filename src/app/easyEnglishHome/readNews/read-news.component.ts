import { Component, OnInit, Pipe } from '@angular/core';
import { NytimesRssService } from './nytimes-rss.service';

@Component({
  selector: 'eeReadNews',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.less'],
})
export class ReadNewsComponent implements OnInit {
  
  URL_NEWS_TECH_1: string= "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
  URL_NEWS_TECH_2: string = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
  URL_NEWS_TECH_CNN: string = "https://rss.cnn.com/rss/edition_technology.rss";
  URL_NEWS_TECH_BBC: string = "https://feeds.bbci.co.uk/news/technology/rss.xml";
  URL_NEWS_TECH_3: string = "https://www.technologyreview.com/topnews.rss";
  URL_NEWS_TECH_4: string = "https://www.cbsnews.com/latest/rss/technology";

  indexNew= 0;
  constructor(public nytimesRssService: NytimesRssService) {}

  ngOnInit() {
    this.nytimesRssService.fetchRSS(this.URL_NEWS_TECH_1);
    this.nytimesRssService.fetchRSS(this.URL_NEWS_TECH_2);
    this.nytimesRssService.fetchRSS(this.URL_NEWS_TECH_CNN);
    this.nytimesRssService.fetchRSS(this.URL_NEWS_TECH_BBC);
    this.nytimesRssService.fetchRSS(this.URL_NEWS_TECH_3);
    this.nytimesRssService.fetchRSS(this.URL_NEWS_TECH_4);

  }
  next() {
    if(this.indexNew==this.nytimesRssService.news.length-1){
      this.indexNew=0;
    }
    else{
      this.indexNew+=1;
    }
  }
  
  

}
