import { Injectable }       from '@angular/core';
import { Response }         from '@angular/http';
import { Observable }       from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Partner }          from "../_models/partner";
import { apiUrl }           from "../_shared/constants";
import { HttpClient }       from "../_shared/http-client";
import { COUNTRIES }        from "../_mock/mock-countries";

@Injectable()
export class AccountService {
	private URL = apiUrl + "account/";

	constructor(private http: HttpClient) {}

	get(id: number): Observable<Partner> {
		return this.http.get(this.URL + id)
			.map((res: Response) => res.json());
	}

	update(partner: Partner): Observable<Partner> {
		return this.http.put(this.URL + partner.id, partner)
			.map((res: Response) => res.json());
	}

	updatePsw(password: Object): Observable<any> {
		let pID = localStorage.getItem('id');
		return this.http.put(this.URL + pID + "/psw", password);
	}

	getCountries() {
		return Observable.of(COUNTRIES);
	}

}
