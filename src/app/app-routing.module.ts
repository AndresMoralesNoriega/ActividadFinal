import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {InfoRegionesComponent} from './info-regiones/info-regiones.component';
import {CarruselComponent} from './carrusel/carrusel.component';
import {PreciosComponent} from './precios/precios.component';
import {FormularioComponent} from './formulario/formulario.component';

const routes: Routes = [
  {path: 'carrusel', component: CarruselComponent},
  {path: 'regiones' , component: InfoRegionesComponent},
  {path: 'precios' , component: PreciosComponent},
  {path: 'formulario' , component: FormularioComponent},
  {path: '', redirectTo: '/regiones', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
