import { Injectable } from '@angular/core';
import { Country } from '../interfaces/searchCountry.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class countriesService {
  constructor(private http: HttpClient) {}

  //Url de la api
  private url: string = 'https://restcountries.com/v3.1';
  //Lista de interfaz de paises que he definido, esta vacia hasta que le hacen una peticion
  countryList: Country[] = [];

 get countries():Country[]{
    //Los ... significan una copia
    return [...this.countryList];
 }

 buscarCountry(name:string): Country[] {
    //La API devuelve una COLECCION asi que me quedo resp entero y no un resp."propiedad"
    //A la url le sumo el parametro que me tienen que pasar
    //Devuelve una copia de la lista con los resultados del pais que le han buscado
    this.http.get<Country[]>(`${this.url}/name/${name}`)
    .subscribe({
      next: (resp) =>{
          this.countryList = resp;
      },
      error: (err) =>{

      }
  })
    //Los ... significan una copia
    return [...this.countryList];
  }



 
}
