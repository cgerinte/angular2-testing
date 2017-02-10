import { NgModule }             from '@angular/core';
import { LocationStrategy, HashLocationStrategy }   from '@angular/common';

import { RoutingModule }        from './routing.module';
import { HttpClient }           from "./_shared/http-client";

import { AppComponent }         from './app.component';
import { AuthGuard }            from "./_guards/auth.guard";
import { AuthModule }           from "./auth/auth.module";
import { HomeModule }           from "./core/home.module";


@NgModule({
	imports     : [ RoutingModule, AuthModule, HomeModule ],
	exports     : [ AppComponent ],
	declarations: [ AppComponent ],
	providers   : [ AuthGuard,
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: HttpClient, useClass: HttpClient }
	],
	bootstrap   : [ AppComponent ]
})
export class AppModule {}