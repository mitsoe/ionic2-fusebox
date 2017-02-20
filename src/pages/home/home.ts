import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'page-home',
    template: require('./home.html')
})
export class HomePage {
    public storage: Storage
    constructor(private platform: Platform) {
        this.platform.ready().then(() => {
            if (this.storage == undefined) {
                this.storage = new Storage();
            }
        });
    }

}
