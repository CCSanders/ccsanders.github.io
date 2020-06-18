import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SoftwareComponent } from './software.component';
import { SoftwareProjectCardComponent } from './software-project-card/software-project-card.component';
import { SoftwareProjectDetailsComponent } from './software-project-details/software-project-details.component';
import { SoftwareService } from '../services/software.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
	declarations: [
		SoftwareComponent,
		SoftwareProjectCardComponent,
		SoftwareProjectDetailsComponent
	],
	exports: [
		SoftwareComponent,
		SoftwareProjectCardComponent,
		SoftwareProjectDetailsComponent
	],
	providers: [
		SoftwareService
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		FontAwesomeModule
	]
})
export class AppSoftwareModule {}