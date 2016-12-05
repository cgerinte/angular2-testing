import { Component, OnInit }    from '@angular/core';

import { AlertService }         from "./alert.service";

@Component({
	moduleId   : module.id,
	selector   : 'alert-msg',
	templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
	message: any;
	
	constructor(private alertSrvc: AlertService) { }

	ngOnInit() {
		this.alertSrvc.getMessage().subscribe(message => { this.message = message; });
	}

	clearMsg() { this.alertSrvc.clear(); }


}