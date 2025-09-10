import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArrayService } from '../sampleservice/array.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  email:string=""
  repackarray:any=""

  constructor(private arr:ArrayService){
    this.repackarray=arr.listarray
  }

  
  onEmail(event:any){
   this.email=event.target.value
  }
  
}
