import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/servicios/loading.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  hostelero: boolean = false;
  local_id !: number;
  constructor(
    private usuarioService: UsuariosService,
    public loader: LoadingService
  ) { }

  ngOnInit(): void {

    this.loader.loadingScreen();
    this.usuarioService.getHostelero().subscribe((result: any) => {

      if (result['mensage'].mensageType === 3) {

      }
      if (result['mensage'].mensageType === 1) {
        this.hostelero = result.data[0].hostelero;
      }

      this.loader.disabledLoading();
    })

  }

}
