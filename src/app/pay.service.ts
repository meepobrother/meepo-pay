import { Injectable } from '@angular/core';
import { CoreService } from 'meepo-core';
import { WxService } from 'meepo-jssdk';
import { UaService } from 'meepo-ua';
import { UuidService } from 'meepo-uuid';
import { AxiosService } from 'meepo-axios';



@Injectable()
export class PayService {
    config: any;
    hasWechat: boolean = false;
    hasCredit: boolean = false;
    hasDivider: boolean = false;

    constructor(
        public core: CoreService,
        public uuid: UuidService,
        public wx: WxService,
        public ua: UaService,
        public axios: AxiosService
    ) {

    }

    initPayConfig() {
        let url = this.core.murl('entry//open', { __do: 'setting.get', code: 'setting.system.pay', m: 'imeepos_runner' }, false);
        this.axios.bpost(url, { code: 'setting.system.pay' }).subscribe((res: any) => {
            this.config = res.info;
            if (this.config) {
                this.config.map(res => {
                    if (res.active) {
                        if (res.type == 'wechat') {
                            if(this.ua.isWechat()){
                                this.hasWechat = true;
                            }
                        }
                        if (res.type == 'credit') {
                            this.hasCredit = true;
                        }
                        if (res.type == 'divider') {
                            this.hasDivider = true;
                        }
                    }
                });
                console.log(this);
            }
        });
    }

    payOrder() {

    }
}