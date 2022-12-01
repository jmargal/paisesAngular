import { Component } from '@angular/core';
import { countriesService } from 'src/app/pais/services/countriesService.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private countriesv:countriesService) { }

  goTo(component:string){
    
  }


}
