import { Component, OnInit } from '@angular/core';
import { countriesService } from '../../services/countriesService.service';
import { Country } from '../../interfaces/searchCountry.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit{
  code:string='';
  country:any;
  constructor(private countriesService: countriesService,private activeroute:ActivatedRoute) {}


  ngOnInit(): void {
      this.code=this.activeroute.snapshot.params['id'];
  }

//   get pais():Country{
//     this.countriesService.country(this.code)
//     .subscribe({
//       next: (resp)=>(return resp),
//       error:(error)=>console.log(error)
//     })
//   }
}
