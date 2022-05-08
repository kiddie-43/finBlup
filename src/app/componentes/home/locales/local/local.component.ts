import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { LoadingService } from 'src/app/servicios/loading.service';
import { LocalesService } from 'src/app/servicios/locales.service';
import { environment } from 'src/environments/environment.prod';
import { ComentarioFormComponent } from './comentarios/comentario-form/comentario-form.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';

ReservaFormComponent
ComentarioFormComponent

MatDivider
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  cargando = true;
  local !: any;
  carusel !: Array<string>;
  idLocal !: number;
  comentarios : any;
  updateComent : boolean = false;

  constructor(
    private localService: LocalesService,
    private activateRoute: ActivatedRoute,
    private dialog: MatDialog,
    private comentariosService: ComentariosService, 
    public loader : LoadingService
  ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((params) => {
      this.idLocal = params['id_local'];
      this.getLocal();
    });
  }

  getLocal() {
    this.loader.loadingScreen();
    
    this.localService.getLocal(this.idLocal).subscribe((result: any) => {     
      this.local = result;
      
      this.loader.disabledLoading();
    });
  }

  crearComentario() {
   this.loader.loadingScreen();
    const params = {
      edit: false,
      data: {
        idLocal: this.idLocal
      }
    };

    const dialogRef = this.dialog.open(ComentarioFormComponent, { data: params },);

     dialogRef.afterClosed().subscribe((resp: any) => {
      this.getLocal();
  
       this.updateComent = !this.updateComent;
       this.loader.disabledLoading();
    })

  }

  crearReserva(){
    const params = {
      edit: false,
      data: {
        id_local: this.idLocal, 
        idUsuario : localStorage.getItem(environment.userCode)
      }
    };

    const dialogRef = this.dialog.open(ReservaFormComponent, { data: params },);
     dialogRef.afterClosed().subscribe((resp: any) => {
    })
 
  }


}
