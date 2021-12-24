import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './shared/components/error404/error404.component';

const appRoutes: Routes = [
  // must be cauthenticated to load modules
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    // todo: add guard
    // canActivate: [authGuard]
  },

  // // public components
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'activate-account',
  //   loadChildren: ActivateAccountComponent,
  // },
  // {
  //   path: 'forgot-password',
  //   loadChildren: ForgotPasswordComponent,
  // },
  // ...

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
