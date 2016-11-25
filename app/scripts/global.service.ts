import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GlobalService {
	protected apiUrl = 'http://api.sirdata.local/api/extra/';



	protected handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
