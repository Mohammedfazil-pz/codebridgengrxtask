import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../sampleservice/productapi.service';
import { ProductboxComponent } from "../productbox/productbox.component";

@Component({
  selector: 'app-productsdisplay',
  imports: [ProductboxComponent],
  templateUrl: './productsdisplay.component.html',
  styleUrl: './productsdisplay.component.css'
})
export class ProductsdisplayComponent implements OnInit {
  constructor(private commonAPI:ProductapiService){}

  productarray:any=[]


  ngOnInit(): void {
    this.getData()
  }



  getData(){
    this.commonAPI.getProducts().subscribe((res:any)=>{
      this.productarray=res.products
    })
  }

  getAlert(event:any){
    alert(event)
  }


}
