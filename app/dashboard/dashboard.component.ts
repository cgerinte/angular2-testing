import { Component, OnInit }    from '@angular/core';
import { Response }             from '@angular/http';

import { AlertService }         from "../_directives/alert.service";

@Component({
	moduleId   : module.id,
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	loading: number = 1;

	constructor() {}

	ngOnInit() {
	}


}
