import { createSelector } from "@ngrx/store"

export const selectProductState=(state:any)=>state.product

export const selectedProducts=createSelector(selectProductState,(state)=>state.products)
export const errorProducts=createSelector(selectProductState,(state)=>state.error)