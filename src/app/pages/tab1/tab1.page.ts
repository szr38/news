import { Component, OnInit } from '@angular/core';
import { Article, replyToPHeadlines } from '../../interface/interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  notices:Article[]=[];

  constructor(private service:NewsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getTopHeadlines().subscribe((resp:replyToPHeadlines) =>{
      console.log('noticias',resp);
      this.notices.push(...resp.articles);
      console.log('notices:',this.notices);
      
    });
  }

}
