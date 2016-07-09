import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

const routes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard'
    // pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
