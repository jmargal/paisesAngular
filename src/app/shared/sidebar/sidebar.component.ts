import { Component } from '@angular/core';
import { countriesService } from 'src/app/pais/services/countriesService.service';
import { Country } from '../../pais/interfaces/searchCountry.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private countriesv:countriesService) { }

  get history(): Country[] {
    return this.countriesv.countries;
  }


}
