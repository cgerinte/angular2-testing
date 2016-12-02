import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Response }         from '@angular/http';

import { AccountService }   from "../account.service";

@Component({
	moduleId: module.id,
	selector: 'form-password',
	templateUrl: 'form-password.component.html'
})
export class FormPasswordComponent {
	@Input() psw = { oldPsw: "", newPsw: "", test: "" };
	@Output() message = new EventEmitter<string>();

	loading: number = 0;

	constructor(private accountSrvc: AccountService) {}

	update(): void {
		if ( this.psw.newPsw !== this.psw.test ) {
			this.message.emit("PASSWORD_DIFF");
			return;
		}

		this.loading++;
		this.accountSrvc.updatePsw(this.psw).subscribe(
			() => {
				this.psw = { oldPsw: "", newPsw: "", test: "" };
				this.loading--;
				this.message.emit("PASSWORD_OK");
			},
			this.errorWS
		);
	}

	errorWS(err: any) { this.message.emit((err instanceof Response) ? err.text() : err); this.loading--; };

}
