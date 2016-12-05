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
var billing_1 = require("../_models/billing");
var partner_1 = require("../_models/partner");
var alert_service_1 = require("../_directives/alert.service");
var account_service_1 = require("./account.service");
var billing_service_1 = require("./billing.service");
var AccountComponent = (function () {
    function AccountComponent(alertSrvc, accountSrvc, billingSrvc) {
        this.alertSrvc = alertSrvc;
        this.accountSrvc = accountSrvc;
        this.billingSrvc = billingSrvc;
        this.activeTab = 'details';
        this.partner = new partner_1.Partner;
        this.billing = new billing_1.Billing;
        this.loading = 1;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +localStorage.getItem('id');
        this.accountSrvc.get(id).subscribe(function (result) {
            _this.partner = result;
            _this.loading--;
        }, this.errorWS);
        /*this.billingSrvc.get(id).subscribe(
            (result: Billing) => {
                this.billing = result;
                this.loading--;
            }, this.errorWS );*/
    };
    AccountComponent.prototype.onMessage = function (msg) {
        this.alertSrvc.dispatch(msg);
    };
    AccountComponent.prototype.errorWS = function (err) {
        this.loading--;
        console.error("After Dispatch...");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccountComponent.prototype, "activeTab", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', partner_1.Partner)
    ], AccountComponent.prototype, "partner", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', billing_1.Billing)
    ], AccountComponent.prototype, "billing", void 0);
    AccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'account.component.html',
            providers: [account_service_1.AccountService, billing_service_1.BillingService]
        }), 
        __metadata('design:paramtypes', [alert_service_1.AlertService, account_service_1.AccountService, billing_service_1.BillingService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
