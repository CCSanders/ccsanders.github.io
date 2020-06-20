import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GamesComponent } from './games.component';
import { GamesService } from '../services/games.service';
import { AppSharedModule } from '../shared/shared.module';
import { GameProjectCardComponent } from './game-project-card/game-project-card.component';
import { GameProjectDetailsComponent } from './game-project-details/game-project-details.component';

@NgModule({
	declarations: [
		GamesComponent,
		GameProjectCardComponent,
		GameProjectDetailsComponent
	],
	exports: [
		GamesComponent
	],
	providers: [
		GamesService
	],
	imports: [
		AppSharedModule,
		CommonModule,
		FormsModule,
		RouterModule,
		FontAwesomeModule
	]
})

export class AppGamesModule {}