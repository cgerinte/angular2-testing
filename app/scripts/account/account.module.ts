import {NgModule}       from '@angular/core';
import {CommonModule}   from "@angular/common";
import {FormsModule}    from '@angular/forms';

import {TextPipeModule}         from "../filters/text-pipe.module";
import {TabRoutingModule}       from "./tab-routing.module";
import {AccountComponent}       from './account.component';
import {FormAccountComponent}   from "./form-account.component";
import {FormPasswordComponent}  from "./form-password.component";
import {FormBillingComponent}   from "./form-billing.component";
import {AccountService}         from "./account.service";


@NgModule({
  imports       : [ CommonModule, FormsModule, TextPipeModule, TabRoutingModule ],
  declarations  : [ AccountComponent, FormAccountComponent, FormPasswordComponent, FormBillingComponent ],
  providers     : [ AccountService ],
})
export class AccountModule {}
