import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NytimesRssService {
  private static parseXML(response: string): any {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');
    // Aquí podrías continuar la conversión como te sea conveniente
    return xmlDoc;
  }

  news: any[] = [];

  constructor(private http: HttpClient) {}

  fetchRSS(url: string) {
    this.http
      .get(url, { responseType: 'text' })
      .pipe(map(NytimesRssService.parseXML))
      .subscribe((xmlData: Document) => {
        const items = Array.from(xmlData.querySelectorAll('item'));
        const origin = xmlData.querySelector('title')?.textContent;
        items.splice(5);
        console.log(origin, "OK");
        items.forEach((item) => {
          console.log(item)
          const descriptionNode = item.querySelector('description');
          const mediaContentNode = item.querySelector('content');
          console.log( mediaContentNode)
          if (
            descriptionNode?.textContent &&
            mediaContentNode?.getAttribute('url')
          ) {
            this.news.push({
              origin: origin,
              title: item.querySelector('title')?.textContent,
              link: item.querySelector('link')?.textContent,
              description: descriptionNode.textContent,
              pubDate: item.querySelector('pubDate')?.textContent,
              imageUrl: mediaContentNode.getAttribute('url'),
            });
            
          }
          

        });
      });
  }
}
