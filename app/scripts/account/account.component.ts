import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'account.component.html'
})
export class AccountComponent {
	@Input() activeTab: string = 'details';
}
