import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Response }         from '@angular/http';

import { Partner }          from "../../models/partner";
import { AccountService }   from "../account.service";

@Component({
	moduleId: module.id,
	selector: 'form-account',
	templateUrl: 'form-account.component.html',
	providers: [ AccountService ]
})
export class FormAccountComponent implements OnInit {
	@Input() partner: Partner;
	@Output() message = new EventEmitter<string>();

	loading: number = 0;
	countries: any[];

	constructor(private accountSrvc: AccountService) {}

	ngOnInit() {
		this.countries = this.accountSrvc.getCountries();
	}

	update() {
		this.loading++;
		this.accountSrvc.update(this.partner).subscribe(
			(result: Partner) => {
				this.partner = result;
				this.loading--;
				this.message.emit("ACCOUNT_OK");
			},
			this.errorWS
		);
	}
	
	errorWS(err: any) { this.message.emit((err instanceof Response) ? err.text() : err); this.loading--; };

}
