import { NgModule }         from '@angular/core';

import { SharedModule } from "../_shared/shared.module";
import { AlertModule }  from "../_directives/alert.module";

import { TagService }   from './tag.service';
import { TagComponent } from './tag.component';

@NgModule({
	imports     : [ SharedModule, AlertModule ],
	declarations: [ TagComponent ],
	providers   : [ TagService ]
})
export class TagModule {
}
