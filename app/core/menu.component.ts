import { Component }    from '@angular/core';
import { Router }       from '@angular/router';

import { APP_PATH }     from "../_shared/AppPath";
import { AuthService }  from "../auth/auth.service";

@Component({
	moduleId   : module.id,
	selector   : 'my-menu',
	templateUrl: 'menu.component.html'
})
export class MenuComponent {
	path = APP_PATH;
	email = localStorage.getItem('email');

	constructor(private router: Router,
	            private authSrvc: AuthService) {}

	toggleArrow() {
		let elem = $('#toggleMenu').find('i');
		if ( elem.hasClass('fa-arrow-left') ) {
			elem.removeClass('fa-arrow-left');
			elem.addClass('fa-arrow-down');
		}
		else {
			elem.removeClass('fa-arrow-down');
			elem.addClass('fa-arrow-left');
		}
	}

	logout() {
		this.authSrvc.logout().then(() => {
			this.router.navigate(['login']);
		});
	};
}
