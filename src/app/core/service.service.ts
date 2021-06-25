import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  service:any[]=[
    {
      nombre:'Antonio',
      especialidad: 'Guía de turismo',
      descripcion: 'Serña un placer atenderte en todo lo que necesitas',
    }
  ]

  constructor() {
    console.log('Estamos en línea')
  }
  obtenerEquipo(){
    return this.service;
  }
}
