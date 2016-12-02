import { Component, Input, OnInit } from '@angular/core';

import { Billing }        from "../models/billing";
import { Partner }        from "../models/partner";
import { AccountService } from "./account.service";
import { BillingService } from "./billing.service";

@Component({
	moduleId: module.id,
	templateUrl: 'account.component.html',
	providers: [ AccountService, BillingService ]
})
export class AccountComponent implements OnInit {
	@Input() activeTab: string = 'password';
	@Input() partner: Partner = new Partner;
	@Input() billing: Billing = new Billing;

	loading: number = 2;
	message: string;
	classMsg: string;

	constructor(private accountSrvc: AccountService,
	            private billingSrvc: BillingService) {}

	ngOnInit() {
		const id: number = +localStorage.getItem('id');
		this.accountSrvc.get(id).subscribe(
			(result: Partner) => {
				this.partner = result;
				this.loading--;
			},
			this.errorWS
		);
		this.billingSrvc.get(id).subscribe(
			(result: Billing) => {
				this.billing = result;
				this.loading--;
			},
			this.errorWS
		);
	}
	
	onMessage(msg: string) { this.setMessage(msg); }
	setMessage(msg: string, status: number = 200) {
		console.log(msg);
		this.message = msg;
		this.classMsg = (status == 200) ? "notif-success" : "notif-error";
	}
	clearMsg(): void { this.message = null; }

	errorWS(err: any) {
		console.log(err.toString());
		this.setMessage(err.text(), err.statusCode);
		this.loading--;
	}

}
