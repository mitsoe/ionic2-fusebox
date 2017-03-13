import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  // template: require('./hello-world.component.html'),
  template: `<ion-content no-bounce>
          Hello world!
        </ion-content>
            `
})

export class HelloWorldComponent {
  constructor() {
    console.log('Hello world component')
  }
}
