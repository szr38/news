import { Component, OnInit, ViewChild, } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article, replyToPHeadlines } from 'src/app/interface/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  category: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  notices: Article[] = [];

  constructor(private service: NewsService) {
  }

  ngOnInit(): void {
    this.serviceLoadNewCategory(this.category[0]);
  }

  serviceLoadNewCategory(category: string, event?) {
    this.service.getTopHeadlinesCategory(category).subscribe((resp: replyToPHeadlines) => {
      if (resp.status != "error")
        this.notices.push(...resp.articles);
      if (event) {
        event.target.complete();
      }
    });
  }

  onCategoryChange(event) {
    this.notices = [];
    this.serviceLoadNewCategory(event.detail.value);
  }

  onLoadData(event) {
    this.serviceLoadNewCategory(this.segment.value, event);
  }

}
