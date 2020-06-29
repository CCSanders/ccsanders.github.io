import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BlogArticleModel } from './models/article.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  public articles : BlogArticleModel[]
  public showAll : boolean = false;
  public showMoreBtn: boolean = false;
  public initialShowCount: number = 6;

  constructor(public blogService: BlogService, private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle("Blog - Colin Sanders Portfolio");
    this.articles = this.blogService.getArticles();
    
    if(this.articles.length > this.initialShowCount){
      this.showMoreBtn = true;
    }
  }
}
