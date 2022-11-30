import { Injectable } from '@angular/core';
import { Country } from '../interfaces/searchCountry.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class countriesService {
  constructor(private http: HttpClient) {}

  //Url de la api
  private url: string = 'https://restcountries.com/v3.1'; //Para buscar por nombre
  private unicoPais:string= 'https://restcountries.com/v3.1/alpha/'; //Por codigo
  


  //Metodo que devuelve un observable de country array
 buscarCountry(name:string):Observable<Country[]> {
   
    //Hace el return de --> el objeto http que he inyectado, su metodo get de la url que tengo arriba más el name 
    //que me pasan por parametro
    //La api devuelve una coleccion de country
    return this.http.get<Country[]>(`${this.url}/name/${name}`)
    
  }
   

  //Metodo que se le pasa un codigo y devuelce el observable de country array
  country(code:string):Observable<Country[]>{
    //Idem al metodo de arriba pero con un codigo 
    return this.http.get<Country[]>(`${this.unicoPais}/${code}`);
  }
  }
