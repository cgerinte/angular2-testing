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
var mock_account_1 = require("./mock-account");
var mock_countries_1 = require("./mock-countries");
var AccountService = (function () {
    function AccountService() {
    }
    AccountService.prototype.getAccount = function () {
        return mock_account_1.ACCOUNT;
    };
    AccountService.prototype.getCountries = function () {
        return mock_countries_1.COUNTRIES;
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
