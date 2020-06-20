import { Component, Input } from '@angular/core';
import { BlogArticleModel } from '../models/article.model';

@Component({
  selector: 'app-blog-article-card',
  templateUrl: './blog-article-card.component.html',
  styleUrls: ['./blog-article-card.component.scss']
})
export class BlogArticleCardComponent {

  @Input() article : BlogArticleModel;

  constructor() { }
}
