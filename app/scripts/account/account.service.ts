import {Injectable} from '@angular/core';

import {Partner}    from "../models/partner";
import {ACCOUNT}    from "../mock/mock-account";
import {COUNTRIES}  from "../mock/mock-countries";

@Injectable()
export class AccountService {
  getAccount(): Partner {
    return ACCOUNT;
  }

  getCountries() {
    return COUNTRIES;
  }
}
