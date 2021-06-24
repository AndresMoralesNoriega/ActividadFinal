import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component';
import {InfoRegionesComponent} from './info-regiones/info-regiones.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'regiones' , component: InfoRegionesComponent},
  {path: '', redirectTo: '/regiones', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
