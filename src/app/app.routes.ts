import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'SyncTask - Collaboration in Real Time'
  },
  {
    path: 'inscription',
    component: SignupPageComponent,
    title: 'Inscription - SyncTask'
  },
  {
    path: 'connexion',
    component: LoginPageComponent,
    title: 'Connexion - SyncTask'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
