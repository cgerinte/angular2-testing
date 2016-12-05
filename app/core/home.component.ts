import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	template: '<my-menu></my-menu><router-outlet></router-outlet>'
})
export class HomeComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
	}
}
