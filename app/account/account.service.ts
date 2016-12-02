import { Injectable }       from '@angular/core';
import { Response }         from '@angular/http';
import { Observable }       from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { GlobalService }  from "../global.service";
import { COUNTRIES }      from "../mock/mock-countries";
import { Partner }        from "../models/partner";
import { apiUrl }         from "../shared/constants";
import { HttpClient }     from "../shared/http-client";

@Injectable()
export class AccountService extends GlobalService {
	private URL = apiUrl + "account/";

	constructor(private http: HttpClient) {
		super();
	}

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
		return COUNTRIES;
	}

}
