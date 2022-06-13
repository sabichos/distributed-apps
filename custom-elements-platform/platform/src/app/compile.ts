// projects/dialer-component/src/app/compile.ts
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { SecurePhoneModule } from './secure-phone.module';
import 'zone.js';

enableProdMode();

platformBrowserDynamic().bootstrapModule(SecurePhoneModule).catch(err => console.log(err));