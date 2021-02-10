import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { replyToPHeadlines } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getTopHeadlines() {
    return this.http.get<replyToPHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=cf2230f0a2ab484c92e8c46e49bcc318`);
  }

  constructor(private http: HttpClient) {

  }
}
