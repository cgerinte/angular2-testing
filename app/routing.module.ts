import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_PATH }             from './_shared/AppPath';
import { AuthGuard }            from "./_guards/auth.guard";

import { LoginComponent }       from "./auth/login.component";
import { HomeComponent }        from "./core/home.component";
import { DashboardComponent }   from "./dashboard/dashboard.component";
import { AccountComponent }     from "./account/account.component";

const appRoutes: Routes = [
	{ path: APP_PATH.LOGIN, component: LoginComponent },
	{
		path            : '',
		component       : HomeComponent,
		canActivate     : [ AuthGuard ],
		canActivateChild: [ AuthGuard ],
		children        : [
			{ path: APP_PATH.HOME, component: DashboardComponent },
			{ path: APP_PATH.ACCOUNT, component: AccountComponent },
		]
	},
	{ path: '**', redirectTo: APP_PATH.HOME }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class RoutingModule {
}
