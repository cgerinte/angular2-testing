import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {Partner}    from "../models/partner";
import {COUNTRIES}  from "../mock/mock-countries";
import {GlobalService} from "../global.service";

@Injectable()
export class AccountService extends GlobalService {
	private accountUrl = this.apiUrl + '/account/';

	constructor (private http: Http) {
		this.http._defaultOptions.headers.append('X-Authorization', localStorage.getItem('token'));
	}
	
	getAccount(id): Promise<Partner> {
		return this.http.get(this.accountUrl + id).toPromise()
			.then(response => response.json().data as Partner)
			.catch(this.handleError);
	}

	getCountries() {
		return COUNTRIES;
	}

}
