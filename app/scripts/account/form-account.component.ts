import {Component, Input, OnInit} from '@angular/core';

import {Partner}        from "../models/partner";
import {AccountService} from "./account.service";

@Component({
	moduleId    : module.id,
	selector    : 'form-account',
	templateUrl : 'form-account.component.html',
	providers   : [ AccountService ]
})
export class FormAccountComponent implements OnInit {
	@Input() partner: Partner;
	countries: any[];

	constructor(private accountSrvc: AccountService) {}

	ngOnInit() {
		this.partner = this.accountSrvc.getAccount(1020);
		this.countries = this.accountSrvc.getCountries();
	}

	updateAccount (): void {
	console.log(this.partner);
}
}
