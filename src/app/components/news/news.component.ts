import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() notices:Article[]=[];

  constructor() { }

  ngOnInit() {}

}
