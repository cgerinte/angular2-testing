import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule }     from '@angular/router';

import { SharedModule }         from "../shared/shared.module";
import { LoggerService }        from './logger.service';
import { MenuComponent }        from './menu.component';
import { FooterComponent }      from './footer.component';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
	imports     : [ RouterModule, SharedModule ],
	declarations: [ MenuComponent, FooterComponent ],
	exports     : [ MenuComponent, FooterComponent ],
	providers   : [ LoggerService ]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
