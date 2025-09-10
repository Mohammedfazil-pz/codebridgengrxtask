import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private apiCall:HttpClient) { }

  getProducts(){
    return this.apiCall.get("https://dummyjson.com/products")
  }
}
