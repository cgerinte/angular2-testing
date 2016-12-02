import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

@Injectable()
export class HttpClient {

	constructor(private http: Http) {
	}

	createAuthorizationHeader(headers: Headers) {
		headers.append('X-Authorization', localStorage.getItem('token'));
	}

	get(url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.get(url, {
			headers: headers
		});
	}

	post(url: string, data: any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.post(url, data, {
			headers: headers
		});
	}

	put(url: string, data: any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.put(url, data, {
			headers: headers
		});
	}

	del(url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.delete(url, {
			headers: headers
		});
	}
}