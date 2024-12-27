import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(LoginComponent, {
  providers: [
   provideHttpClient(), provideRouter(routes) // Use 'routes' here
  ]
}).catch(err => console.error(err));