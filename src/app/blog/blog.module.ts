import { NgModule } from "@angular/core";

import { BlogComponent } from './blog.component';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		BlogComponent
	],
	exports: [
		BlogComponent
	],
	imports: [
		AppSharedModule
	]
})

export class AppBlogModule {}