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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require("@angular/platform-browser");
var account_component_1 = require('./account.component');
var account_form_component_1 = require("./account.form.component");
var account_service_1 = require("./account.service");
var text_pipe_module_1 = require("../filters/text-pipe.module");
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, text_pipe_module_1.TextPipeModule],
            declarations: [account_component_1.AccountComponent, account_form_component_1.AccountFormComponent],
            providers: [account_service_1.AccountService],
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
