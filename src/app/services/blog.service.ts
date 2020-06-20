import { Injectable } from '@angular/core';
import { BlogArticleModel } from '../blog/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

//TODO : have this pulling data from an api 
private dummyData : BlogArticleModel[] = new Array(
  {
	id : "test-article-1",
	title: "Test Article 1",
	summary: "This is the first test article.",
	mdSrc: "/assets/md/test-markdown-1.md",
	imgUrl: "assets/imgs/code-banner.jpg"
  },
  {
	id : "test-article-2",	
	title: "Test Article 2",
	summary: "This is the second test article.",
	mdSrc: "/assets/md/test-markdown-2.md",
	imgUrl: "assets/imgs/notebook-banner.jpg"
  },
  {
	id : "test-article-ext",
	title: "Test Article External",
	summary: "This is a test article where the markdown is from an external source.",
	mdSrc: "",
	imgUrl: "assets/imgs/controller-banner.jpg"
  }
);

  constructor() { }

  public getArticles() : BlogArticleModel[]{
    return this.dummyData;
  }

  public getArticle(id : string) : BlogArticleModel{
    return this.dummyData.find(element => element.id == id);
  }
}
