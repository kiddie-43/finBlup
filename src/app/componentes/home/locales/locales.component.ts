import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/servicios/loading.service';
import { LocalesService } from 'src/app/servicios/locales.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { MsgService } from '../../../servicios/msg.service';

UsuariosService
@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})
export class LocalesComponent implements OnInit {

  listaLocales: any;
  cargando: boolean = false;


  constructor(
    public localesService: LocalesService,
    public usuarioService: UsuariosService,
    private loader: LoadingService,
    private msg: MsgService

  ) {
    this.getLocales();
  }

  ngOnInit(): void {
  }
  getLocales() {
    this.loader.loadingScreen();
    return this.localesService.obtenerLocales().subscribe((resp: any) => {
      console.log(resp);
      if (resp.mensage.mensageType === 1) {
        this.listaLocales = resp.data;
      }

      if (resp.mensage.mensageType === 3) {
        this.msg.openMensage(resp.mensage.mensageType, resp.mensage.mensageText)
      }



      this.loader.disabledLoading();
      return this.listaLocales;
    })
  }


}
