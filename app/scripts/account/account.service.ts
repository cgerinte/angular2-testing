import {Injectable} from '@angular/core';
import {Partner} from "./partner";
import {ACCOUNT} from "./mock-account";
import {COUNTRIES} from "./mock-countries";

@Injectable()
export class AccountService {
  getAccount(): Partner {
    return ACCOUNT;
  }

  getCountries() {
    return COUNTRIES;
  }
}
