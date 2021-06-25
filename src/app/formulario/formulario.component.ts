import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../core/service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  interpolationBinding = 'Suscríbete Aquí';
  propertyBinding = 'blue';

  service:any [] = [];
  constructor(private _servicio:ServiceService) {
    this.service = _servicio.obtenerEquipo();
  }


  ngOnInit(): void {
  }
  enviar($event){
    console.log($event);
  }
}
