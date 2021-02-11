import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { replyToPHeadlines } from '../interface/interfaces';

const apiUrl= environment.apiUrl;
const apiKey = environment.apiKey;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  RunQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers } );

  }
  
  constructor(private http: HttpClient) {

  }

  getTopHeadlines() {
    return this.RunQuery<replyToPHeadlines>('');
  }

  getTopHeadlinesCategory(category:string) {
    return this.RunQuery(`&category=${ category }`)
  }

}
