import { NgModule }       from '@angular/core';
import { LocationStrategy, HashLocationStrategy }   from '@angular/common';

import { AppComponent }       from './app.component';
import { DashboardModule }    from "./dashboard/dashboard.module";

import { AccountModule }      from "./account/account.module";
import { CoreModule }         from "./core/core.module";
import { RoutingModule }      from './routing.module';
import { HttpClient }         from "./shared/http-client";

@NgModule({
	imports     : [
		CoreModule, RoutingModule,
		DashboardModule, AccountModule
	],
	exports     : [ AppComponent ],
	declarations: [ AppComponent ],
	providers   : [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: HttpClient, useClass: HttpClient }
	],
	bootstrap   : [ AppComponent ]
})
export class AppModule {}