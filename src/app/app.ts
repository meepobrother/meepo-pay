import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeepoCoreServiceModule } from 'meepo-core';
import { AxiosModule } from 'meepo-axios';
import { UuidModule } from 'meepo-uuid';
import { JssdkModule } from 'meepo-jssdk';
import { UaModule } from 'meepo-ua';



import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

import { PayService } from './pay.service';
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule, MeepoCoreServiceModule, 
        AxiosModule, UuidModule, JssdkModule,
        UaModule
    ],
    exports: [
    ],
    providers: [
        PayService
    ],
})
export class PayModule { }
export { PayService } from './pay.service';
