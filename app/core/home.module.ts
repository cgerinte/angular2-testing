import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { SharedModule }     from "../_shared/shared.module";
import { DashboardModule }  from "../dashboard/dashboard.module";
import { AccountModule }    from "../account/account.module";
import { TagModule }        from "../tags/tag.module";
import { AddonModule }      from "../addon/addon.module";

import { HomeComponent }    from './home.component';
import { MenuComponent }    from './menu.component';
import { FooterComponent }  from './footer.component';

@NgModule({
	imports     : [ SharedModule, DashboardModule, AccountModule, TagModule, AddonModule ],
	declarations: [ HomeComponent, MenuComponent, FooterComponent ]
})
export class HomeModule {
	constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
		throwIfAlreadyLoaded(parentModule, 'HomeModule');
	}
}
