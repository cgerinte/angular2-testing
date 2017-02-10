import {Component, Input, OnInit}     from '@angular/core';
import {Response}     from '@angular/http';

import {Tag}          from "../_models/index";
import {TagService}   from './tag.service';

@Component({
    moduleId: module.id,
    templateUrl: 'tag.component.html',
    providers: [TagService]
})
export class TagComponent implements OnInit {
    @Input() website:string;
    loading:number = 0;

    pathContract:string = navigator.language == 'fr' ? "/Contrat_SirData.pdf" : "/Contrat_SirData_EN.pdf";
    websites:Tag[] = [];

    checkTerms:boolean = false;
    script:string = "";

    private tag:string;

    constructor(private tagSrvc:TagService) {
    }

    ngOnInit() {
        this.loading++;
        this.tagSrvc.index().subscribe(
            (result:Tag[]) => {
                this.websites = result;
                this.loading--;
            }, this.errorWS);
    };

    buildTag(siteID:number) {
        let pa = localStorage.getItem('id');

        this.tag = "<script type='text/javascript'</code>>(function(){var service = 'GS.d';var config = {pa : " + pa + " ,si : " + siteID + ",u : document.location.href,r : document.referrer,s : '',/* SEARCH TERM */k : '',/* KEYWORDS */hd_m : '',/* EMAIL HASH MD5 */hd_s256 : '',/* EMAIL HASH SHA-256 *//*DO NOT CHANGE BELOW*/rand : (new Date()).getTime()};var configParams = [];for(var v in config){configParams .push(v+'='+encodeURIComponent(config[v]));}var sddanJS=document.createElement('script');sddanJS.async = true;sddanJS.type = 'text/javascript';sddanJS.src='//js.sddan.com/'+service+'?'+ configParams.join('&');document.getElementsByTagName('head')[0].appendChild(sddanJS);})();</script>";

        this.script = this.checkTerms ? this.tag : "";
    }

    show() {
        this.checkTerms = true;
        this.script = this.tag;
    }

    store() {
        this.loading++;
        this.tagSrvc.store(this.website).subscribe(
            (result:Tag) => {
                this.websites.push(result);
                this.website = "";
                this.loading--;
            }, this.errorWS)
    }

    remove(id:number) {
        this.loading++;
        this.tagSrvc.destroy(id).subscribe(
            () => {
                // TODO Delete from websites
                let pos = this.websites.findIndex(x => x.id == id);
                this.websites.splice(pos, 1);
                this.loading--;
            }, this.errorWS)
    }

    private errorWS(err:Response|any) {
        this.loading--;
        //console.error(err);
    }
}