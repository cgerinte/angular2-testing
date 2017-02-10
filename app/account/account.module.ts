import { NgModule }         from '@angular/core';

import { SharedModule }     from "../_shared/shared.module";
import { AlertModule }      from "../_directives/alert.module";

import { AccountService }   from './account.service';
import { BillingService }   from './billing.service';

import { AccountComponent }         from './account.component';
import { FormAccountComponent }     from './forms/form-account.component';
import { FormBillingComponent }     from './forms/form-billing.component';
import { FormPasswordComponent }    from './forms/form-password.component';

@NgModule({
	imports     : [ SharedModule, AlertModule ],
	declarations: [ AccountComponent, FormAccountComponent, FormPasswordComponent, FormBillingComponent ],
	providers   : [ AccountService, BillingService ],
})
export class AccountModule {
}
