import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductapiService } from "../../app/sampleservice/productapi.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect {
      loadProduct;
    constructor(private api: ProductapiService, private action: Actions) {
        this.loadProduct= createEffect(() =>
            this.action.pipe(
                ofType(loadProducts),
                switchMap(() => this.api.getProducts().pipe(
                    map((res) => loadProductsSuccess({ products: res })),
                    catchError((err) => of(loadProductsFailure({ error: "Something went wrong!" })))
                ))
            )
        )
    }

}