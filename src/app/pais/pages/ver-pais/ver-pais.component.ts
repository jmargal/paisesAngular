import { Component, OnInit } from '@angular/core';
import { countriesService } from '../../services/countriesService.service';
import { Country } from '../../interfaces/searchCountry.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit{
  //Aqui voy a guardar el codigo por el que quiere buscar el pais
  code:string='';
  country!:Country;

  //Inyecto el service y la clase para poder trabajar con la ruta
  constructor(private countriesService: countriesService,private activeroute:ActivatedRoute) {}

  //Este metodo se va a ejecutar nada mas iniciar y va a devolver la info de un solo pais que pasar por la ruta
  ngOnInit(): void {
    //De la ruta, me quedo con el parametro que se llama id, que es como he definido en routing que se va a llamar
    this.code=this.activeroute.snapshot.params['id'];
    //LLamo al  del service que devuelve un observable con un array de country, le paso el code que he cogido antes que me han pasado por la ruta
    this.countriesService.country(this.code)
    .subscribe({
      //Si encuentra, muestra de la coleccion el primero
      next: (resp) => {this.country=resp[0]},
      //Si hay error muestra por consola
      error: (error) => console.log(error)

    })
  }
}
