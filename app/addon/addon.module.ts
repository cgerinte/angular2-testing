import { NgModule }         from '@angular/core';

import { SharedModule } from "../_shared/shared.module";
import { AlertModule }  from "../_directives/alert.module";

import { AddonService }   from './addon.service';
import { AddonComponent } from './addon.component';

@NgModule({
	imports     : [ SharedModule, AlertModule ],
	declarations: [ AddonComponent ],
	providers   : [ AddonService ]
})
export class AddonModule {
}
