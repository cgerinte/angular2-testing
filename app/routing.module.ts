import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_PATH}             from './scripts/main/AppPath';
import { AccountComponent }   from './scripts/account/account.component';
import { DashboardComponent } from "./scripts/main/dashboard.component";

const appRoutes: Routes = [
  { path: APP_PATH.HOME, component: DashboardComponent },
  { path: APP_PATH.ACCOUNT, component: AccountComponent },
  { path: '', redirectTo: APP_PATH.HOME, pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
