import { enableProdMode, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
    PreloadAllModules,
    provideRouter,
    RouteReuseStrategy,
    withPreloading,
} from '@angular/router';
import {
    IonicRouteStrategy,
    provideIonicAngular,
} from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';
import { provideServiceWorker } from '@angular/service-worker';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular({ mode: 'md' }),
        provideRouter(routes, withPreloading(PreloadAllModules)),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
})
.catch(e => console.log(e))
