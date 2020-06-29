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

  onLoad() {
    this.stripContent();
  }

  private stripContent() {
    this._elementRef.nativeElement
      .querySelector('markdown')
      .querySelectorAll('markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents')
      .forEach(x => x.remove());
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.article = this._blogService.getArticle(params.get('articleId'));
      this._titleService.setTitle(this.article.title + " - Colin Sanders Blog");
    })
  }

}
