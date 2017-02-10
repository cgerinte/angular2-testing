import { Injectable }   from '@angular/core';
import { Response }     from '@angular/http';
import { Observable }   from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { apiUrl }       from "../_shared/constants";
import { HttpClient }   from "../_shared/http-client";
import { Addon } 		from "../_models/index";

@Injectable()
export class AddonService {
	private URL = apiUrl + localStorage.getItem('id') + "/addon";

	constructor(private http: HttpClient) {}

	index(): Observable<Addon[]> {
		return this.http.get(this.URL).map((res: Response) => res.json());
	}

	update(site: Addon): Observable<any> {
		return this.http.put(this.URL + "/" + site.siteID, site);
	}

	files(id: number): Observable<any> {
		return this.http.get(this.URL + '/' + id + '/files');
	}

	download(id: number): Observable<any> {
		return this.http.get(this.URL + '/' + id + '/download');
	}

}