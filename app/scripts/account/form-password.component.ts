import {Component, Input} from '@angular/core';


@Component({
	moduleId    : module.id,
	selector    : 'form-password',
	templateUrl : 'form-password.component.html'
})
export class FormPasswordComponent {
	@Input() psw = {};

	constructor () {}

	updatePassword (): void {
		console.log(this.psw);
	}
}
