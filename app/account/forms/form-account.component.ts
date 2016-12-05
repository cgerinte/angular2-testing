import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Response }         from '@angular/http';

import { Partner }          from "../../_models/partner";
import { AccountService }   from "../account.service";

@Component({
	moduleId: module.id,
	selector: 'form-account',
	templateUrl: 'form-account.component.html',
	providers: [ AccountService ]
})
export class FormAccountComponent implements OnInit {
	@Input() partner: Partner;
	@Output() message = new EventEmitter<[string, number]>();

	loading: number = 0;
	countries: any[];

	constructor(private accountSrvc: AccountService) {}

	ngOnInit() {
		this.accountSrvc.getCountries().subscribe(res => this.countries = res);
	}

	update() {
		this.loading++;
		this.accountSrvc.update(this.partner)
			.subscribe((result: Partner) => {
				this.partner = result;
				this.loading--;
				this.message.emit([ "ACCOUNT_OK", 200 ]);
			}, this.errorWS);
	}

	errorWS(err: Response) {
		console.log(err);
		this.loading--;
	};

}
