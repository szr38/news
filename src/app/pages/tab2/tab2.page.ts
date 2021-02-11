import { Component, OnInit,  } from '@angular/core';
import { Article, replyToPHeadlines } from 'src/app/interface/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  category:string[]=['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  notices:Article[]=[];

  constructor(private service:NewsService) {
  }

  serviceLoadNewCategory(category:string){
    this.service.getTopHeadlinesCategory(category).subscribe((resp:replyToPHeadlines)=>{
      this.notices.push(...resp.articles);
      console.log('notices tab2',this.notices);
      
    });
  }

  onCategoryChange(event){
    console.log('cambio categoria', event);
    this.notices=[];
    this.serviceLoadNewCategory(event.detail.value);
  }

  ngOnInit(): void {
    this.serviceLoadNewCategory(this.category[0]);
  }

}
