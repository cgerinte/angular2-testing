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
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var menu_component_1 = require('./scripts/main/menu.component');
var footer_component_1 = require("./scripts/main/footer.component");
var routing_module_1 = require('./routing.module');
var dashboard_module_1 = require("./scripts/main/dashboard.module");
var account_module_1 = require("./scripts/account/account.module");
var text_pipe_module_1 = require("./scripts/filters/text-pipe.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, routing_module_1.RoutingModule,
                dashboard_module_1.DashboardModule, account_module_1.AccountModule,
                text_pipe_module_1.TextPipeModule
            ],
            declarations: [app_component_1.AppComponent, menu_component_1.MenuComponent, footer_component_1.FooterComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
