import { Routes, RouterModule } from "@angular/router";

//route entry modules
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterOutletComponent } from './shared/router-outlet/router-outlet.component';
import { SoftwareComponent } from './software/software.component';
import { SoftwareProjectDetailsComponent } from './software/software-project-details/software-project-details.component';
import { GamesComponent } from './games/games.component';
import { AcademiaComponent } from './academia/academia.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
				component: GamesComponent
			},
			{
				path: 'academia',
				component: AcademiaComponent
			},
		]
	},
	{
		path: 'blog',
		component: BlogComponent
	},
	{
		path: 'assets/resume.pdf',
		redirectTo: '../assets/resume.pdf'
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