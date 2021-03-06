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
var router_1 = require('@angular/router');
var AppPath_1 = require("../_shared/AppPath");
var auth_service_1 = require("../auth/auth.service");
var MenuComponent = (function () {
    function MenuComponent(router, authSrvc) {
        this.router = router;
        this.authSrvc = authSrvc;
        this.path = AppPath_1.APP_PATH;
        this.email = localStorage.getItem('email');
    }
    MenuComponent.prototype.logout = function () {
        var _this = this;
        this.authSrvc.logout().then(function () {
            _this.router.navigate(['login']);
        });
    };
    ;
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-menu',
            templateUrl: 'menu.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
