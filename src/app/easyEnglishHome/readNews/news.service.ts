import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // if you want to use this service, you need to get your own API key from https://newsapi.org/
  // and replace the following two strings with your own key
  temp = '463f671c77064b42'
  temp2= '875ed45e105a9c54'
  news: any[] = [];

  constructor(private http: HttpClient) {}


  getNews(): Observable<any[]> {
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'from=2024-05-24&' +
    'apiKey='+this.temp + this.temp2;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.articles;
      })
    );
  }
}
