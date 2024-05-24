import { Component, OnInit, Pipe } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'eeReadNews',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.less'],
})
export class ReadNewsComponent implements OnInit {
  
  listNews: any[] = [];
  indexNew= 0;
  constructor(public newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.listNews = news;
    });
  }
  next() {
    if(this.indexNew == this.listNews.length-1){
      this.indexNew=0;
    }
    else{
      this.indexNew+=1;
    }
  }
  
  

}
