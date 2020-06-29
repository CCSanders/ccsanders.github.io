export class BlogArticleModel {
	id : string;
	title: string;
	mdSrc : string;
	summary: string;
	headerImgUrl?: string;
	
	//user section... todo: make this an author Id and have a user service go get name, pic, social media, etc.
	author: string;
	
	date: string;
	length?: number = 0;
	featured?: boolean = false;
}