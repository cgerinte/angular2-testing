import { Component, Input, OnInit }     from '@angular/core';
import { Response }     from '@angular/http';

import { AlertService }     from "../_directives/alert.service";

import { Addon }            from "../_models/index";
import { AddonService }     from './addon.service';
import { apiUrl } from "../_shared/constants";

@Component({
    moduleId: module.id,
    templateUrl: 'addon.component.html',
    providers: [AddonService]
})
export class AddonComponent implements OnInit {
    @Input() currentSite:Addon = new Addon;
    sites:Addon[];
    loading:number = 0;
    link:string;

    private linkZip = $('#linkZipAddon');

    constructor (private alertSrvc:AlertService,
                 private addonSrvc:AddonService) {
    }

    ngOnInit () {
        this.loading++;
        this.addonSrvc.index().subscribe(
            (result:Addon[]) => {
                this.sites = result;
                this.currentSite = result[0];
                this.link = apiUrl + localStorage.getItem('id') + '/addon/' + result[0].siteID + '/download';
                this.loading--;
            }, this.errorWS);
    };

    private makeAddon () {
        this.loading++;
        this.addonSrvc.files(this.currentSite.siteID).subscribe(
            () => {
                (this.currentSite.data_comport || this.currentSite.data_matching) ? this.linkZip.show() : this.linkZip.hide();
                this.loading--;
            }, this.errorWS);
    };

    update () {
        this.loading++;
        this.addonSrvc.update(this.currentSite).subscribe(
            () => {
                (this.currentSite.data_comport || this.currentSite.data_matching) ? this.linkZip.show() : this.linkZip.hide();
                this.alertSrvc.dispatch(["ADDON_UPDATED", 200]);
                this.loading--;
            }, this.errorWS);
    };

    download () {
        this.makeAddon();
        this.link = apiUrl + localStorage.getItem('id') + '/addon/' + this.currentSite.siteID + '/download';
    };

    private errorWS (err:Response|any) {
        this.loading--;
        console.error(err);
    }

}