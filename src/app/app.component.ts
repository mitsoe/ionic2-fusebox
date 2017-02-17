import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';


@Component({
    template: require('./app.html')
})
export class MyApp {
    rootPage = HomePage;


    constructor() {
        let testModule = {
            modules: [`module.exports = {
            sayHello: function () {
                return "HELLO from module 1";
            }
        };`, `module.exports = {
            sayHello: function () {
                return "Bonjour from module 2";
            }
        };`
            ]
        }

        testModule.modules.forEach((myModule, i) => {
            FuseBox.dynamic(i + "/module.js", myModule)
            FuseBox.import("./" + i + "/module")
            let thisModule = FuseBox.import("./" + i + "/module")
            console.log('**', thisModule.sayHello())
        })
        // public platform: Platform
        // this.platform.ready().then(() => {
        //   // Okay, so the platform is ready and our plugins are available.
        //   // Here you can do any higher level native things you might need.
        //   StatusBar.styleDefault();
        //   Splashscreen.hide();
        // });
    }
}
