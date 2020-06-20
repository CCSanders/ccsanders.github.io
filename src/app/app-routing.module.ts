import { Routes, RouterModule } from "@angular/router";

//route entry modules
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterOutletComponent } from './shared/router-outlet/router-outlet.component';
import { SoftwareComponent } from './software/software.component';
import { SoftwareProjectDetailsComponent } from './software/software-project-details/software-project-details.component';
import { GamesComponent } from './games/games.component';
import { GameProjectDetailsComponent } from './games/game-project-details/game-project-details.component'
import { AcademiaComponent } from './academia/academia.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogArticleComponent } from './blog/blog-article/blog-article.component';

const routes: Routes = [
	{
		path: '',
		component: NavigationComponent,
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'software',
				component: RouterOutletComponent,
				children: [
					{
						path: '',
						component: SoftwareComponent
					},
					{
						path: ':projectId',
						component: SoftwareProjectDetailsComponent
					}
				]
			},
			{
				path: 'games',
				component: RouterOutletComponent,
				children: [
					{
						path: '',
						component: GamesComponent
					},
					{
						path: ':projectId',
						component: GameProjectDetailsComponent
					}
				]
			},
			{
				path: 'academia',
				component: AcademiaComponent
			},
			{
				path: 'blog',
				component: RouterOutletComponent,
				children: [
					{
						path: '',
						component: BlogComponent
					},
					{
						path: ':articleId',
						component: BlogArticleComponent
					}
				]
			}
		]
	},
	{
		path: 'assets',
		children: [
			{
				path: 'resume.pdf',
				redirectTo: '../assets/resume.pdf'
			},
			{
				path: 'imgs',
				children: [
					{
						path: 'code-banner.jpg',
						redirectTo: '../assets/imgs/code-banner.jpg'
					}
				]
			},
			{
				path: 'md',
				children: [

					{
						path: 'test-markdown-1.md',
						redirectTo: '../assets/md/test-markdown-1.md'
					},
					{
						path: 'test-markdown-2.md',
						redirectTo: '../assets/md/test-markdown-2.md'
					}
				]
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }