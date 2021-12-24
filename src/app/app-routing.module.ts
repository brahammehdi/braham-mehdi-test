import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateAccountComponent } from './authentication/activate-account/activate-account.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { Error404Component } from './shared/components/error404/error404.component';

const appRoutes: Routes = [
  // must be cauthenticated to load modules
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    // todo: add guard to grant access to private modules
    // canActivate: [authGuard]
  },

  // public components
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  entryComponents: [Error404Component]
})
export class AppRoutingModule { }
