import { Injectable }       from '@angular/core';
import { CanActivate }      from '@angular/router';

import { AuthService }      from "../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authSrvc: AuthService) { }

	canActivate(): boolean {
		return localStorage.getItem('token') ? true : this.authSrvc.logged();
	}

	canActivateChild(): boolean {
		return this.canActivate();
	}
}