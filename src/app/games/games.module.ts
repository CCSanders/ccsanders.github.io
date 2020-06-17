import { NgModule } from "@angular/core";

import { GamesComponent } from './games.component';
import { GamesService } from '../services/games.service';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		GamesComponent
	],
	exports: [
		GamesComponent
	],
	providers: [
		GamesService
	],
	imports: [
		AppSharedModule
	]
})

export class AppGamesModule {}