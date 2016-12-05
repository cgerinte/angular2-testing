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
	@Output() message = new EventEmitter();

	loading: number = 0;

	constructor(private accountSrvc: AccountService) {}

	update(): void {
		if ( this.psw.newPsw !== this.psw.test ) {
			this.message.emit({ text: "PASSWORD_DIFF", status: 400 });
			return;
		}

		this.loading++;
		this.accountSrvc.updatePsw(this.psw).subscribe( () => {
				this.psw = { oldPsw: "", newPsw: "", test: "" };
				this.loading--;
				this.message.emit("PASSWORD_OK");
			}, this.errorWS
		);
	}

	errorWS(err: Response) { this.message.emit(err); this.loading--; };

}
