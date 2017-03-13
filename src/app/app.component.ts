import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Component({
    template: require('./app.html')
})
export class MyApp {
    rootPage = HomePage;


    constructor(private http: Http) {
        // this.loadSimpleBundle();
        this.loadAngularModule();
    }

    public loadAngularModule() {
        return this.http.get('helloModule.js')
            .toPromise()
            .then(this.load)
            .catch(this.handleError);
    }

    private load(res: Response) {
        FuseBox.dynamic("ngModule.js", res.text());
        let test = FuseBox.import('./ngModule.js');
        let test2 = FuseBox.import('myAngularModule/modules/hello-world/hello-world.module.js');
        debugger;
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public loadSimpleBundle() {
        let bundle = `(function(FuseBox){FuseBox.$fuse$=FuseBox;
                FuseBox.pkg("mySuperLib", {}, function(___scope___){
                    ___scope___.file("app/test.js", function(exports, require, module, __filename, __dirname){

                        "use strict";
                        console.log(1);
                        module.exports = { foo: 'bar' };
            //# sourceMappingURL=app.js.map
                    });
                    ___scope___.file("app/test2.js", function(exports, require, module, __filename, __dirname){

                        "use strict";
                        module.exports = { foo: 'barZZZZ' };
                        //# sourceMappingURL=test.js.map
                    });
                });

                FuseBox.import("mySuperLib/app/test.js");
                FuseBox.main("mySuperLib/app/test.js");
                
            })(FuseBox)`;

        FuseBox.dynamic("myApp.js", bundle);
        let test = FuseBox.import('./myApp.js');
        let test2 = FuseBox.import('mySuperLib/app/test.js');
        console.log(test2);
    }
}
