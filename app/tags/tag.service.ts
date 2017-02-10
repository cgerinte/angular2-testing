import { Injectable }   from '@angular/core';
import { Response }     from '@angular/http';
import { Observable }   from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Tag }          from "../_models/index";
import { apiUrl }       from "../_shared/constants";
import { HttpClient }   from "../_shared/http-client";

@Injectable()
export class TagService {
	private URL = apiUrl + localStorage.getItem('id') + "/tags";

	constructor(private http: HttpClient) {}

	index(): Observable<Tag[]> {
		return this.http.get(this.URL).map((res: Response) => res.json());
	}

	store(website: string): Observable<Tag> {
		return this.http.post(this.URL, { website: website })
			.map((res: Response) => res.json());
	}

	destroy(id: number): Observable<any> {
		return this.http.del(this.URL + '/' + id);
	}

}