import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from '../states/products/product.reducer';
import { ProductEffect } from '../states/products/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideEffects([ProductEffect]),provideState({name:"product",reducer:productReducer}),provideHttpClient()]
};
