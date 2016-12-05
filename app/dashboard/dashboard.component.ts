import { Component, OnInit }    from '@angular/core';
import { Response }             from '@angular/http';

import { AlertService }         from "../_directives/alert.service";

@Component({
	moduleId   : module.id,
	templateUrl: 'dashboard.component.html',
	providers  : [  ]
})
export class DashboardComponent implements OnInit {

	loading: number = 1;

	constructor(private alertSrvc: AlertService) {}

	ngOnInit() {
	}

	errorWS(err: Response|any) {
		this.loading--;
		console.error("After Dispatch...");
	}

}
