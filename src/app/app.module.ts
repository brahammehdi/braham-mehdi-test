import { ActivateAccountComponent } from './authentication/activate-account/activate-account.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SharedModule } from './shared/shared.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CategoriesReducer } from 'src/app/ngrx/categories.reducer';
import { CategoriesEffects } from './ngrx/categories.effects';
import { ProductsReducer } from './ngrx/products.reducer';
import { ProductsEffects } from './ngrx/products.effects';

export const reducers: ActionReducerMap<any> = {
  categoriesState: CategoriesReducer,
  productsState: ProductsReducer
  };
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CategoriesEffects, ProductsEffects]),
    StoreDevtoolsModule.instrument()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
