import { Injectable } from '@angular/core';
import { BlogArticleModel } from '../blog/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

//TODO : have this pulling data from an api 
private data : BlogArticleModel[] = new Array(
  {
	id : "test-article-1",
	title: "Test Article 1",
	summary: "This is the first test article.",
	mdSrc: "/assets/md/test-markdown-1.md",
	headerImgUrl: "assets/imgs/code-banner.jpg",
	author: "Colin Sanders",
	date: "June 28",
	length: 3,
	featured: true
  },
  {
	id : "new-pc-build",	
	title: "My New PC: The ITX Monster",
	summary: "This is the second test article.",
	mdSrc: "/assets/md/test-markdown-2.md",
	headerImgUrl: "assets/imgs/notebook-banner.jpg",
	author: "Colin Sanders",
	date: "June 28",
	length: 5,
	featured: false
  },
  {
	id : "welcome-to-blog",
	title: "Welcome to my blog!",
	summary: "Hello and welcome to my blog! I am Colin Sanders, a rising computer science senior at the University of Alabama and a software engineering intern at Lockheed Martin. This is the place where I'll document the things on my mind.",
	mdSrc: "/assets/md/welcome.md",
	headerImgUrl: "assets/imgs/notebook-banner.jpg",
	author: "Colin Sanders",
	date: "June 28",
	length: 3,
	featured: true
  }
);

  constructor() { }

  public getArticles() : BlogArticleModel[]{
    return this.data;
  }

  public getArticle(id : string) : BlogArticleModel{
    return this.data.find(element => element.id == id);
  }
}
