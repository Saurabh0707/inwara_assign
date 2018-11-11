import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}
  // news constants

  news_url = 'https://cryptocontrol.io/api/v1/public/news';
  showNews()  {
    const params = new HttpParams()
      .set('key', 'e5dbc226e6d586a323f410f13eea6cfe')
      .set('language', 'en')
      .set('latest', '1');
    return this.http.get(this.news_url, {params});
  }
}
