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
var AppPath_1 = require('./_shared/AppPath');
var auth_guard_1 = require("./_guards/auth.guard");
var login_component_1 = require("./auth/login.component");
var home_component_1 = require("./core/home.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var account_component_1 = require("./account/account.component");
var addon_component_1 = require("./addon/addon.component");
var tag_component_1 = require("./tags/tag.component");
var appRoutes = [
    { path: AppPath_1.APP_PATH.LOGIN, component: login_component_1.LoginComponent },
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: AppPath_1.APP_PATH.HOME },
            { path: AppPath_1.APP_PATH.HOME, component: dashboard_component_1.DashboardComponent },
            { path: AppPath_1.APP_PATH.ACCOUNT, component: account_component_1.AccountComponent },
            { path: AppPath_1.APP_PATH.TAGS, component: tag_component_1.TagComponent },
            { path: AppPath_1.APP_PATH.ADDON, component: addon_component_1.AddonComponent },
        ]
    },
    { path: '**', redirectTo: AppPath_1.APP_PATH.HOME }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
