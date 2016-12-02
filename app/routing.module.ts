import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from "./dashboard/dashboard.component";
import { AccountComponent }     from "./account/account.component";
import { APP_PATH }             from './shared/AppPath';

const appRoutes: Routes = [
	{ path: APP_PATH.HOME, component: DashboardComponent },
	{ path: APP_PATH.ACCOUNT, component: AccountComponent },
	{ path: '', redirectTo: APP_PATH.HOME, pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class RoutingModule {
}
