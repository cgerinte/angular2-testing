import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';

import { GetTextMsgPipe }   from './text-msg.pipe';
import { GetAlertPipe }     from './text-alert.pipe';

@NgModule({
	declarations: [ GetTextMsgPipe, GetAlertPipe ],
	exports     : [
		BrowserModule, FormsModule, HttpModule, RouterModule,
		GetTextMsgPipe, GetAlertPipe
	]
})
export class SharedModule {
}
