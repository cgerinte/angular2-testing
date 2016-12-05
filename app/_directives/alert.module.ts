import { NgModule } from '@angular/core';

import { SharedModule }     from "../_shared/shared.module";
import { AlertComponent }   from './alert.component';
import { AlertService }     from "./alert.service";

@NgModule({
	imports     : [ SharedModule ],
	exports     : [ AlertComponent ],
	declarations: [ AlertComponent ],
	providers   : [ AlertService ],
})
export class AlertModule {
}
