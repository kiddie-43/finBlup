import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  @Input() carrusel: Array<String> = [''];
  imagenActiva: any;
  constructor() { }

  ngOnInit(): void {
    this.imagenActiva = (this.carrusel.length === 0) ? 'http://dws.local/api/img/utilidades/noPerfil/noImage.png' : this.carrusel[0];

  }
  avanzarCarrusel() {

    let posicion = this.obtenerPosicionArray();
   
    if ((posicion+1) > (this.carrusel.length - 1)) {
      this.imagenActiva = this.carrusel[0]
    } else {
      this.imagenActiva = this.carrusel[posicion + 1];
    }


  }

  retrocederCarrusel() {

    let posicion = this.obtenerPosicionArray();

    if ((posicion - 1) < 0) {
      this.imagenActiva = this.carrusel[this.carrusel.length - 1]
    } else {
      this.imagenActiva = this.carrusel[posicion - 1];
    }



  }

  obtenerPosicionArray() {


    return this.carrusel.indexOf(this.imagenActiva);
  }
  getClassCarrusel(index: number) {

    return (index !== 0) ? 'carousel-item' : 'carousel-item active';
  }
}
