//ANGULAR MODULES
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//3RD PARTY
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown'

//APP MODULES
import { BlogComponent } from './blog.component';
import { AppSharedModule } from '../shared/shared.module';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BlogArticleCardComponent } from './blog-article-card/blog-article-card.component';

@NgModule({
	declarations: [
		BlogComponent,
		BlogArticleComponent,
		BlogArticleCardComponent
	],
	exports: [
		BlogComponent
	],
	imports: [
		AppSharedModule,
		MarkdownModule.forChild(),
		CommonModule,
		FormsModule,
		RouterModule,
		FontAwesomeModule
	]
})

export class AppBlogModule {}