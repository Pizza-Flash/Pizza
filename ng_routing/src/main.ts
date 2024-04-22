import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { routes } from './components/app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });
