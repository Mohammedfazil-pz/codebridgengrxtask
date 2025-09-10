import { createAction, props } from "@ngrx/store";


export const loadProducts=createAction("[redux Component] LoadProducts")
export const loadProductsSuccess=createAction("[redux Component] loadProductsSuccess",props<{products:any}>())
export const loadProductsFailure=createAction("[redux Component] loadProductsFailure",props<{error:string}>())
