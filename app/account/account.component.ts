import { Component, Input, OnInit }         from '@angular/core';
import { Response }         from '@angular/http';

import { AlertService }     from "../_directives/alert.service";
import { Billing, Partner } from "../_models/index";

import { AccountService }   from './account.service';
import { BillingService }   from './billing.service';

@Component({
	moduleId   : module.id,
	templateUrl: 'account.component.html'
})
export class AccountComponent implements OnInit {
	@Input() activeTab: string = 'details';
	@Input() partner: Partner = new Partner;
	@Input() billing: Billing = new Billing;

	loading: number = 0;

	constructor(private alertSrvc: AlertService,
	            private accountSrvc: AccountService,
	            private billingSrvc: BillingService) {}

	ngOnInit() {
		this.loading = 2;
		this.accountSrvc.get().subscribe(
			(result: Partner) => {
				this.partner = result;
				this.loading--;
			}, this.errorWS );
		this.billingSrvc.get().subscribe(
			(result: Billing) => {
				this.billing = result;
				this.loading--;
			}, this.errorWS );
	}

	onMessage(msg: [string, number]) {
		this.alertSrvc.dispatch(msg);
	}

	private errorWS(err: Response|any) {
		this.loading--;
		console.error(err);
	}

}
