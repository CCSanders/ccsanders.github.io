import { NgModule } from "@angular/core";

import { AcademiaComponent } from './academia.component';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		AcademiaComponent
	],
	exports: [
		AcademiaComponent
	],
	imports: [
		AppSharedModule
	]
})

export class AppAcademiaModule {}