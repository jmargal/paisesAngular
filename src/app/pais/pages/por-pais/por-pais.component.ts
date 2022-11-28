import { Component } from '@angular/core';
import { countriesService } from '../../services/countriesService.service';
import { Country } from '../../interfaces/searchCountry.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  //Inyecto el servicio
  constructor(private countriSv: countriesService) {}
  name: string = '';

  //Metodo que va devolver la lista de Country del service
  get results(): Country[] {
    return this.countriSv.countries;
  }

  //Le introduce un pais y llama al metodo del service
  buscarPais(name: string): Country[] {
    this.name = name;
    return this.countriSv.buscarCountry(name);
  }
}
