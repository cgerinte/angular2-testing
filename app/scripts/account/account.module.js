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
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var text_pipe_module_1 = require("../filters/text-pipe.module");
var tab_routing_module_1 = require("./tab-routing.module");
var account_component_1 = require('./account.component');
var form_account_component_1 = require("./form-account.component");
var form_password_component_1 = require("./form-password.component");
var form_billing_component_1 = require("./form-billing.component");
var account_service_1 = require("./account.service");
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, text_pipe_module_1.TextPipeModule, tab_routing_module_1.TabRoutingModule],
            declarations: [account_component_1.AccountComponent, form_account_component_1.FormAccountComponent, form_password_component_1.FormPasswordComponent, form_billing_component_1.FormBillingComponent],
            providers: [account_service_1.AccountService],
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
