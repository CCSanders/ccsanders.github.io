import { Component, OnInit } from '@angular/core';
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
  public initialShowCount: number = 6;

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.articles = this.blogService.getArticles();
  }
}
