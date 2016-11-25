import {Component, Input} from '@angular/core';

@Component({
	moduleId    : module.id,
	selector    : 'form-billing',
	templateUrl : 'form-billing.component.html'
})
export class FormBillingComponent {
	@Input() billing = {};

	constructor () {}

	updateBilling (): void {
		console.log(this.billing);
	}
}
