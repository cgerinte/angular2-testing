import { Injectable }               from '@angular/core';
import { Http, Headers, Response }  from '@angular/http';
import { Observable }               from 'rxjs/Rx';

import { AlertService }             from "../_directives/alert.service";

@Injectable()
export class HttpClient {

	constructor(private http: Http,
	            private alertSrvc: AlertService) {}

	createAuthorizationHeader(headers: Headers) {
		headers.append('X-Authorization', localStorage.getItem('token'));
	}

	get(url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.get(url, { headers: headers }).catch(this.errorWS);
	}

	post(url: string, data: any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.post(url, data, { headers: headers }).catch(this.errorWS);
	}

	put(url: string, data: any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.put(url, data, { headers: headers }).catch(this.errorWS);
	}

	del(url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.delete(url, { headers: headers }).catch(this.errorWS);
	}

	private errorWS = (error: Response) => {
		this.alertSrvc.dispatch(error);
		return Observable.throw(error);
	}
}