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
var billing_1 = require("../models/billing");
var partner_1 = require("../models/partner");
var account_service_1 = require("./account.service");
var billing_service_1 = require("./billing.service");
var AccountComponent = (function () {
    function AccountComponent(accountSrvc, billingSrvc) {
        this.accountSrvc = accountSrvc;
        this.billingSrvc = billingSrvc;
        this.activeTab = 'password';
        this.partner = new partner_1.Partner;
        this.billing = new billing_1.Billing;
        this.loading = 2;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +localStorage.getItem('id');
        this.accountSrvc.get(id).subscribe(function (result) {
            _this.partner = result;
            _this.loading--;
        }, this.errorWS);
        this.billingSrvc.get(id).subscribe(function (result) {
            _this.billing = result;
            _this.loading--;
        }, this.errorWS);
    };
    AccountComponent.prototype.onMessage = function (msg) { this.setMessage(msg); };
    AccountComponent.prototype.setMessage = function (msg, status) {
        if (status === void 0) { status = 200; }
        console.log(msg);
        this.message = msg;
        this.classMsg = (status == 200) ? "notif-success" : "notif-error";
    };
    AccountComponent.prototype.clearMsg = function () { this.message = null; };
    AccountComponent.prototype.errorWS = function (err) {
        console.log(err.toString());
        this.setMessage(err.text(), err.statusCode);
        this.loading--;
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
        __metadata('design:paramtypes', [account_service_1.AccountService, billing_service_1.BillingService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
