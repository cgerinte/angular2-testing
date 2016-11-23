import { Component } from '@angular/core';
import {APP_PATH} from "./AppPath";

@Component({
    moduleId: module.id,
    selector: 'my-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent {
    path = APP_PATH;
    email = 'admin@sirdata.com';

    toggleArrow () {
        let elem = $('#toggleMenu').find('i');
        if (elem.hasClass('fa-arrow-left')) {
            elem.removeClass('fa-arrow-left');
            elem.addClass('fa-arrow-down');
        }
        else {
            elem.removeClass('fa-arrow-down');
            elem.addClass('fa-arrow-left');
        }
    }
}
