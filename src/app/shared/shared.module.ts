import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { WipComponent } from './wip/wip.component';

@NgModule({
	declarations: [
		RouterOutletComponent,
		WipComponent
	],
	exports: [
		RouterOutletComponent,
		WipComponent
	],
	imports: [
		RouterModule
	] 
})
export class AppSharedModule {}