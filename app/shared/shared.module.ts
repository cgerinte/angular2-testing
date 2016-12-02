import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { GetTextMsgPipe } from './text-msg.pipe';
import { GetErrorPipe }   from './text-error.pipe';

@NgModule({
	declarations: [ GetTextMsgPipe, GetErrorPipe ],
	exports: [
		BrowserModule, FormsModule, HttpModule,
		GetTextMsgPipe, GetErrorPipe
	]
})
export class SharedModule { }
