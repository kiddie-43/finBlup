import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { ComentarioFormComponent } from './comentario-form/comentario-form.component';
ComentarioFormComponent
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() idLocal: number = 0;
  @Input() cambiosComentarios !: boolean;

  comentarios: Array<any> = [];

  constructor(
    private dialog: MatDialog,
    private comentariosService: ComentariosService
  ) {}
  
  recibiRespuesta(value:any){
    this.getComentarios();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.getComentarios();
  }

  ngOnInit(): void {
    this.getComentarios();
  }


  getComentarios() {
    this.comentariosService.getComentarios(this.idLocal).subscribe((result: any) => {
      this.comentarios = result['comentarios'];
    })
  }
  actualizarComentario(comentario: any) {
    const params = {
      edit: true,
      data: {
        idComentario: comentario.id,
        puntuacion: comentario.valoracion,
        comentario: comentario.comentario
      }
    };

    const dialogRef = this.dialog.open(ComentarioFormComponent, { data: params, panelClass: "comentario" },);
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getComentarios();
    })

  }

  eliminarComentario(id: any) {
    this.comentariosService.deleteComentario(id).subscribe((resp: any) => {
      this.getComentarios();
    })
  }


}
