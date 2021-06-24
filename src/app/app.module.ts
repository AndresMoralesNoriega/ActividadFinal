import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { InfoRegionesComponent } from './info-regiones/info-regiones.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { PreciosComponent } from './precios/precios.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    FooterComponent,
    InfoRegionesComponent,
    MenuComponent,
    NoticiasComponent,
    FormularioComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
