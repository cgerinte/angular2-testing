import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";

import {AccountComponent}     from './account.component';
import {AccountFormComponent} from "./account.form.component";
import {AccountService}       from "./account.service";
import {TextPipeModule}       from "../filters/text-pipe.module";

@NgModule({
  imports: [ BrowserModule, FormsModule, TextPipeModule ],
  declarations: [ AccountComponent, AccountFormComponent ],
  providers: [ AccountService ],
})
export class AccountModule {}
