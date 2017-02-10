import { NgModule } from '@angular/core';

import { SharedModule }     from "../_shared/shared.module";
import { AlertModule }      from "../_directives/alert.module";

import { AuthService }      from './auth.service';
import { LoginComponent }   from './login.component';

@NgModule({
	imports     : [ SharedModule, AlertModule ],
	declarations: [ LoginComponent ],
	providers   : [ AuthService ]
})
export class AuthModule {
}