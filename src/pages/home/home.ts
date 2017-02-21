import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    template: require('./home.html')
})
export class HomePage {
    public store: Storage;
    constructor(public storage: Storage) {
        this.store = new Storage();
    }
}
