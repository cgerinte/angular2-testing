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
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var constants_1 = require("../_shared/constants");
var http_client_1 = require("../_shared/http-client");
var mock_countries_1 = require("../_mock/mock-countries");
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.URL = constants_1.apiUrl + "account/";
    }
    AccountService.prototype.get = function (id) {
        return this.http.get(this.URL + id)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.update = function (partner) {
        return this.http.put(this.URL + partner.id, partner)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.updatePsw = function (password) {
        var pID = localStorage.getItem('id');
        return this.http.put(this.URL + pID + "/psw", password);
    };
    AccountService.prototype.getCountries = function () {
        return Rx_1.Observable.of(mock_countries_1.COUNTRIES);
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
