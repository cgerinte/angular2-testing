import { NgModule }       from '@angular/core';

import { SharedModule }             from "../shared/shared.module";
import { AccountService }           from "./account.service";
import { BillingService }           from "./billing.service";
import { AccountComponent }         from './account.component';
import { FormAccountComponent }     from "./forms/form-account.component";
import { FormPasswordComponent }    from "./forms/form-password.component";
import { FormBillingComponent }     from "./forms/form-billing.component";

@NgModule({
	imports     : [ SharedModule ],
	declarations: [ AccountComponent, FormAccountComponent, FormPasswordComponent, FormBillingComponent ],
	providers   : [ AccountService, BillingService ],
})
export class AccountModule {
}
