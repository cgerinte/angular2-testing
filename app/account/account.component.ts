import { Component, Input, OnInit } from '@angular/core';
import { Response }         from '@angular/http';

import { Billing }          from "../_models/billing";
import { Partner }          from "../_models/partner";
import { AlertService }     from "../_directives/alert.service";
import { AccountService }   from "./account.service";
import { BillingService }   from "./billing.service";

@Component({
	moduleId   : module.id,
	templateUrl: 'account.component.html',
	providers  : [ AccountService, BillingService ]
})
export class AccountComponent implements OnInit {
	@Input() activeTab: string = 'details';
	@Input() partner: Partner = new Partner;
	@Input() billing: Billing = new Billing;

	loading: number = 1;

	constructor(private alertSrvc: AlertService,
	            private accountSrvc: AccountService,
	            private billingSrvc: BillingService) {}

	ngOnInit() {
		const id: number = +localStorage.getItem('id');
		this.accountSrvc.get(id).subscribe(
			(result: Partner) => {
				this.partner = result;
				this.loading--;
			}, this.errorWS );
		/*this.billingSrvc.get(id).subscribe(
			(result: Billing) => {
				this.billing = result;
				this.loading--;
			}, this.errorWS );*/
	}

	onMessage(msg: [string, number]) {
		this.alertSrvc.dispatch(msg);
	}

	errorWS(err: Response|any) {
		this.loading--;
		console.error("After Dispatch...");
	}

}
