import { createReducer, on } from "@ngrx/store";
import { loadProductsFailure, loadProductsSuccess } from "./product.action";

export interface ProductFace{
    products:Array<any>
    error:string
}

export const intialProductState:ProductFace={
    products:[],
    error:""
}

export const productReducer=createReducer(intialProductState,
    on(loadProductsSuccess,(state,{products})=>({...state,products:products,error:''})),
    on(loadProductsFailure,(state,{error})=>({...state,error:error}))
)