import { Component, OnInit } from '@angular/core';
import { Article, replyToPHeadlines } from '../../interface/interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  notices: Article[] = [];
  page: number = 1;

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.serviceTopHeadlines();
  }

  onLoadData(event) {
    console.log('infite scroll', event);
    this.serviceTopHeadlines(event);
  }

  serviceTopHeadlines(event?) {
    this.service.getTopHeadlines(this.page).subscribe((resp: replyToPHeadlines) => {
      if (resp.status != "error"  &&  resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.notices.push(...resp.articles);
      if ( event ) {
        event.target.complete();
      }
    this.page++;
    });
  }

}
