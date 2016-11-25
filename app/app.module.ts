import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';

import {AppComponent}       from './app.component';
import {MenuComponent}      from './scripts/main/menu.component';
import {FooterComponent}    from "./scripts/main/footer.component";

import {RoutingModule}          from './routing.module';
import {DashboardModule}        from "./scripts/main/dashboard.module";
import {AccountModule}          from "./scripts/account/account.module";
import {TextPipeModule}         from "./scripts/filters/text-pipe.module";

@NgModule({
	imports: [
		CommonModule, RoutingModule,
		DashboardModule, AccountModule,
		TextPipeModule
	],
	declarations: [ AppComponent, MenuComponent, FooterComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}