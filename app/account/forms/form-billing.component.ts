import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Response }         from '@angular/http';

import { Billing }          from "../../_models/billing";
import { BillingService }   from "../billing.service";

@Component({
	moduleId: module.id,
	selector: 'form-billing',
	templateUrl: 'form-billing.component.html',
	providers: [ BillingService ]
})
export class FormBillingComponent {
	@Input() billing: Billing;
	@Output() message = new EventEmitter();

	loading: number = 0;

	constructor(private billingSrvc: BillingService) {}

	update(): void {
		this.loading++;
		this.billingSrvc.update(this.billing).subscribe(
			(result: Billing) => {
				this.billing = result;
				this.loading--;
				this.message.emit("BILLING_OK");
			}, this.errorWS
		);
	}

	errorWS(err: Response) { this.message.emit(err); this.loading--; };

}
