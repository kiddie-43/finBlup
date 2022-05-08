import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-descripciones',
  templateUrl: './tab-descripciones.component.html',
  styleUrls: ['./tab-descripciones.component.scss']
})
export class TabDescripcionesComponent implements OnInit {
 
  @Input() descripciones : any = { descripcion : "", menu : "" } ; 
  @Input() valoracion : any = 100;
 
  constructor() { }

  ngOnInit(): void {
  }

}
