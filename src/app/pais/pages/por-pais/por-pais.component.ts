import { Component } from '@angular/core';
import { countriesService } from '../../services/countriesService.service';
import { Country, Name } from '../../interfaces/searchCountry.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  //Inyecto el servicio
  constructor(private countriSv: countriesService) {}
  query: string = ''; //El string que me van a pasar para buscar por nombre
  errorMsg:string=''; //Donde voy a copiar el nombre si no lo encuentra
  countryList: Country[] = []; //Lista de de tipo Country que es la interfaz
  error:boolean=false; //Bandera

  //Metodo que va devolver la lista de Country del service

  //Le introduce un pais y llama al metodo del service
  buscarPais() {
    this.errorMsg=this.query; //Igualo el msg de error a la query
    //Llamo al metodo del service que me devuelve un observable de tipo Country[]
    this.countriSv.buscarCountry(this.query).subscribe({ //Con el subcribe le digo que si devuelve haga una cosa o si da error lo trato
      next: (resp) =>{
          //Si tengo respuesta la lista de paises que tengo declarada es igual a eso
          this.countryList = resp;
          //La bandera de que hay error se pone a false para que no muestre el mensaje
          this.error=false;
      },
      error: (err) =>{
        //Si hay error vacio la lista y pongo la bandera a true para que se muestre el error y no salga la tabla
        this.error=true;
        this.countryList=[];
      }
  })
  //Vuelvo a poner la propiedad del nombre a vacio
  this.query=''

  
}
}
