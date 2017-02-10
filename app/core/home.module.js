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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var module_import_guard_1 = require('./module-import-guard');
var shared_module_1 = require("../_shared/shared.module");
var dashboard_module_1 = require("../dashboard/dashboard.module");
var account_module_1 = require("../account/account.module");
var tag_module_1 = require("../tags/tag.module");
var addon_module_1 = require("../addon/addon.module");
var home_component_1 = require('./home.component');
var menu_component_1 = require('./menu.component');
var footer_component_1 = require('./footer.component');
var HomeModule = (function () {
    function HomeModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'HomeModule');
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, dashboard_module_1.DashboardModule, account_module_1.AccountModule, tag_module_1.TagModule, addon_module_1.AddonModule],
            declarations: [home_component_1.HomeComponent, menu_component_1.MenuComponent, footer_component_1.FooterComponent]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [HomeModule])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
