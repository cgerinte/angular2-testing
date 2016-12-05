import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { AuthService }          from "./auth.service";
import { AlertService }         from "../_directives/alert.service";

@Component({
	moduleId   : module.id,
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	pathContract: string = navigator.language == 'fr' ? "/Contrat_SirData.pdf" : "/Contrat_SirData_EN.pdf";
	credentials: any = { email: "benoitoberle@gmail.com", password: '' };
	loading = false;
	cgu: boolean = true;

	constructor(private router: Router,
	            private authSrvc: AuthService,
	            private alertSrvc: AlertService) { }

	ngOnInit() { }

	login() {
		this.loading = true;
		this.authSrvc.login(this.credentials.email, this.credentials.password)
			.subscribe(
				data => this.router.navigate(['']),
				error => {
					this.alertSrvc.dispatch(error);
					this.loading = false;
				}
			);
	}
}