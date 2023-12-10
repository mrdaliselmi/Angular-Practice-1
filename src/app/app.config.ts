import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideRouter, withPreloading} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {CustomPreloadStrategy} from "./custom-preload-strategy";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withPreloading(CustomPreloadStrategy)),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(HttpClientModule),
  ],
};
