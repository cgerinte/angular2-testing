import { Injectable }       from '@angular/core';
import { Response }         from '@angular/http';
import { Observable }       from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Billing }          from "../_models/billing";
import { apiUrl }           from "../_shared/constants";
import { HttpClient }       from "../_shared/http-client";

@Injectable()
export class BillingService {
	private URL = apiUrl + "billing/";

	constructor(private http: HttpClient) {}

	get(pID: number): Observable<Billing> {
		return this.http.get(this.URL + pID)
			.map((res: Response) => res.json());
	}

	update(billing: Billing): Observable<Billing> {
		return this.http.put(this.URL + billing.id, billing)
			.map((res: Response) => res.json());
	}

}
