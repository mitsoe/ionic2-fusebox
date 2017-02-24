import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';


@Component({
    template: require('./app.html')
})
export class MyApp {
    rootPage = HomePage;
}
