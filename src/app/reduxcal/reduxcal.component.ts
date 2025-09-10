import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts, loadProductsSuccess } from '../../states/products/product.action';
import { selectedProducts } from '../../states/products/product.selector';

@Component({
  selector: 'app-reduxcal',
  imports: [],
  templateUrl: './reduxcal.component.html',
  styleUrl: './reduxcal.component.css'
})
export class ReduxcalComponent {
  constructor(private ngrxStore:Store){
    this.ngrxStore.dispatch(loadProducts());
    this.ngrxStore.select(selectedProducts).subscribe((res)=>{
      console.log(res)
    })
  }
}
