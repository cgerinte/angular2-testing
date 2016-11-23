import {Component, Input, OnInit} from '@angular/core';

import {Partner} from "./partner";
import {AccountService} from "./account.service";

@Component({
  moduleId: module.id,
  selector: 'form-account',
  templateUrl: 'account.form.component.html',
  providers: [ AccountService ]
})
export class AccountFormComponent implements OnInit {
  @Input() partner: Partner;
  countries: any[];

  constructor(private accountSrvc: AccountService) {}

  ngOnInit() {
    this.partner = this.accountSrvc.getAccount();
    this.countries = this.accountSrvc.getCountries();
  }

  updateAccount (): void {
    console.log(this.partner);
  }
}
