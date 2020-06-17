import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceEntryComponent } from './experience/experience-entry/experience-entry.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavCardComponent } from './about-me/nav-card/nav-card.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		HomeComponent,
		SkillsComponent,
		ExperienceComponent,
		ExperienceEntryComponent,
		ContactMeComponent,
		AboutMeComponent,
		NavCardComponent
	],
	exports: [
		HomeComponent,
		SkillsComponent,
		ExperienceComponent,
		ExperienceEntryComponent,
		ContactMeComponent,
		AboutMeComponent,
		NavCardComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		FontAwesomeModule,
	]
})
export class AppHomeModule {}