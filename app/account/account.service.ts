import { Injectable }       from '@angular/core';
import { Response }         from '@angular/http';
import { Observable }       from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Partner }          from "../_models/index";
import { apiUrl }           from "../_shared/constants";
import { HttpClient }       from "../_shared/http-client";
import { COUNTRIES }        from "../_mock/mock-countries";

@Injectable()
export class AccountService {
	private URL = apiUrl + "account/";
	private pID: number = +localStorage.getItem('id');

	constructor(private http: HttpClient) {}

	get(): Observable<Partner> {
		return this.http.get(this.URL + this.pID)
			.map((res: Response) => res.json());
	}

	update(partner: Partner): Observable<Partner> {
		return this.http.put(this.URL + partner.id, partner)
			.map((res: Response) => res.json());
	}

	updatePsw(password: Object): Observable<any> {
		return this.http.put(this.URL + this.pID + "/psw", password);
	}

	getCountries() {
		return Observable.of(COUNTRIES);
	}

}
