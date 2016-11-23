"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var partner_1 = require("./partner");
var account_service_1 = require("./account.service");
var AccountFormComponent = (function () {
    function AccountFormComponent(accountSrvc) {
        this.accountSrvc = accountSrvc;
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        this.partner = this.accountSrvc.getAccount();
        this.countries = this.accountSrvc.getCountries();
    };
    AccountFormComponent.prototype.updateAccount = function () {
        console.log(this.partner);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', partner_1.Partner)
    ], AccountFormComponent.prototype, "partner", void 0);
    AccountFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-account',
            templateUrl: 'account.form.component.html',
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], AccountFormComponent);
    return AccountFormComponent;
}());
exports.AccountFormComponent = AccountFormComponent;
