import 'reflect-metadata';
// Angular wants it
import 'zone.js/dist/zone';
// Styles
import "./app/app.scss";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
