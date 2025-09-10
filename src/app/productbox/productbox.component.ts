import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productbox',
  imports: [],
  templateUrl: './productbox.component.html',
  styleUrl: './productbox.component.css'
})
export class ProductboxComponent {


  @Input() productDataFromDisplayPage:any=[]

  @Output() onAlert=new EventEmitter()

  getData(){
    console.log(this.productDataFromDisplayPage)
  }

  btnClick(){
    this.onAlert.emit("Hey broh!")
  }

}
