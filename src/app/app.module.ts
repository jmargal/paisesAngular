import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { countriesService } from './pais/services/countriesService.service';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,CommonModule, AppRoutingModule,SharedModule,PaisModule],
  providers: [countriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
