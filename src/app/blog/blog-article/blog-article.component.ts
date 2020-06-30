import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BlogService } from 'src/app/services/blog.service';
import { BlogArticleModel } from '../models/article.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogArticleComponent implements OnInit {

  public article: BlogArticleModel;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _activatedRoute: ActivatedRoute,
    private _blogService: BlogService,
    private _titleService: Title
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.article = this._blogService.getArticle(params.get('articleId'));
      this._titleService.setTitle(this.article.title + " - Colin Sanders Blog");
    })
  }

}
