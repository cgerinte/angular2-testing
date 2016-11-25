import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormAccountComponent}   from "./form-account.component";
import {FormPasswordComponent}  from "./form-password.component";
import {FormBillingComponent}   from "./form-billing.component";

const appRoutes: Routes = [
  { path: 'account/tab-details', component: FormAccountComponent },
  { path: 'account/tab-settings', component: FormPasswordComponent },
  { path: 'account/tab-billing', component: FormBillingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class TabRoutingModule {}
