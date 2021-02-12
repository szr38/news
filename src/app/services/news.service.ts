import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { replyToPHeadlines } from '../interface/interfaces';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  category:string;
  pagCategory:number;

  constructor(private http: HttpClient) {

  }

  getTopHeadlines(page: number) {
    return this.RunQuery<replyToPHeadlines>(`&page=${page}`);
  }

  getTopHeadlinesCategory(category: string) {
    if (category===this.category){
      this.pagCategory++;
    }else{
      this.category=category;
      this.pagCategory=1;
    }
    console.log('category', category, 'page: ',this.pagCategory);
    
      return this.RunQuery(`&category=${category}&page=${ this.pagCategory }`)
  }


  RunQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });

  }
}
