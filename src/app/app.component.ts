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
        let bundle = `(function(FuseBox){FuseBox.$fuse$=FuseBox;
                        FuseBox.pkg("mySuperLib", {}, function(___scope___){
                        ___scope___.file("app/test.js", function(exports, require, module, __filename, __dirname){ 

                        "use strict";
                        module.exports = { foo: 'bar' };
                        //# sourceMappingURL=test.js.map
                        });
                        });
                        FuseBox.defaultPackageName = "mySuperLib";
                        })
                        (FuseBox)`
        let bundleSimple = `module.exports = {foo : 'bar'}`
        FuseBox.dynamic("foo/bar.js", bundleSimple)
        FuseBox.dynamic("foo/bar2.js", bundle)
        let test = require("~/foo/bar.js")
        let test2 = require("~/foo/bar2.js")
        debugger;
    }
}
