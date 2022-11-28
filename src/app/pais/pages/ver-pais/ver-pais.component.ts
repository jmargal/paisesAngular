import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent {
  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id'])
  }
}
