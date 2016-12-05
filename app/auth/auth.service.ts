import { Injectable }               from '@angular/core';
import { Http, Headers, Response }  from '@angular/http';
import { Observable }               from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { apiUrl } from "../_shared/constants";

@Injectable()
export class AuthService {
	private URL = apiUrl + "auth/";
	private loggedIn: boolean = false;

	constructor(private http: Http) {
		this.loggedIn = !!localStorage.getItem('token');
	}

	login(email: string, password: string) {
		return this.http.post(this.URL + 'login', { email: email, password: password })
			.map((res: Response) => {
				if (res.ok) {
					this.loggedIn = true;
					let partner = res.json();

					if ( partner && partner.token ) {
						localStorage.setItem('id', partner.id);
						localStorage.setItem('token', partner.token);
						localStorage.setItem('addon', partner.addon);
						localStorage.setItem('email', email);
					}
				}
			});
	}

	logout() {
		let headers = new Headers({ 'X-Authorization': localStorage.getItem('token') });
		return this.http.get(this.URL + 'logout', { headers: headers })
			.map(() => {
				console.log("Disconnected");
				this.loggedIn = false;
				
				localStorage.removeItem('id');
				localStorage.removeItem('token');
				localStorage.removeItem('addon');
				localStorage.removeItem('email');
			})
			.catch(error => {
				if (error.status == 401) {

					this.loggedIn = false;

					localStorage.removeItem('id');
					localStorage.removeItem('token');
					localStorage.removeItem('addon');
					localStorage.removeItem('email');
				}
				else return Observable.throw(error);
			})
			.toPromise();
	};

	logged() { return this.loggedIn; };
}