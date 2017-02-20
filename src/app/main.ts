import 'reflect-metadata';
// Angular wants it
import 'zone.js/dist/zone';
// Styles
import "./app.scss";
import "ionic-angular/css/ionic.css";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
