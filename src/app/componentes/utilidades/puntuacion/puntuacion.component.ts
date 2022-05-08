import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.scss']
})
export class PuntuacionComponent implements OnInit {

  @Input() value !: any ;
 
  color: ThemePalette = 'primary';
   mode: ProgressSpinnerMode = 'determinate';
   //value = 100;
   valueMedia !: Number ;
  constructor(
   
  ) { }

  ngOnInit(): void {
  this.valueMedia = this.value /10;

  }
}
