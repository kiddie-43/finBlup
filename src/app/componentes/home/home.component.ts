import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/servicios/loading.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public usuarioService: UsuariosService,
    public loader : LoadingService
    ) {
    usuarioService.estaRegistrado();
  
  }

  ngOnInit(): void { 
   
  }

}
