import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule }         from "../_shared/shared.module";
import { AlertModule }          from "../_directives/alert.module";

import { HomeComponent }        from "./home.component";
import { MenuComponent }        from './menu.component';
import { FooterComponent }      from './footer.component';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { DashboardModule }      from "../dashboard/dashboard.module";
import { AccountModule }        from "../account/account.module";

@NgModule({
	imports     : [
		AlertModule, SharedModule,
		DashboardModule, AccountModule
	],
	declarations: [ HomeComponent, MenuComponent, FooterComponent ]
})
export class HomeModule {
	constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
		throwIfAlreadyLoaded(parentModule, 'HomeModule');
	}
}
