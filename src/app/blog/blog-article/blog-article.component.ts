import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from 'src/app/services/blog.service';
import { BlogArticleModel } from '../models/article.model';
import { TitleTagService } from 'src/app/services/title-tag.service';

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
    private blogService: BlogService,
    private titleTagService: TitleTagService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.article = this.blogService.getArticle(params.get('articleId'));
      
      this.titleTagService.setTitle(this.article.title + " - Colin Sanders Blog");
      this.titleTagService.setSocialMediaTags("https://ccsanders.github.io/blog/" + this.article.id, this.article.title + " - Colin Sanders Blog", this.article.title + " - Colin Sanders Blog", this.article.headerImgUrl);
    })
  }

}
