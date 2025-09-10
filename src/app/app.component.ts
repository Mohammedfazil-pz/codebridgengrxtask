import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent } from "./form/form.component";
import { ProductsdisplayComponent } from "./productsdisplay/productsdisplay.component";
import { ReduxcalComponent } from './reduxcal/reduxcal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormComponent, ReduxcalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceangular';
}
