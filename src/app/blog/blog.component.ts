import { Component, OnInit } from '@angular/core';

import { BlogArticleModel } from './models/article.model';
import { BlogService } from '../services/blog.service';
import { TitleTagService } from '../services/title-tag.service';

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

  constructor(public blogService: BlogService, private titleTagService: TitleTagService) { }

  ngOnInit() {
    this.titleTagService.setTitle("Blog - Colin Sanders Portfolio");
    this.titleTagService.setSocialMediaTags("https://ccsanders.github.io/blog", "Blog - Colin Sanders Portfolio", "Blog - Colin Sanders Portfolio", '/assets/imgs/website-logo.png');

    this.articles = this.blogService.getArticles();
    
    if(this.articles.length > this.initialShowCount){
      this.showMoreBtn = true;
    }
  }
}
