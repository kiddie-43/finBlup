import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { environment } from 'src/environments/environment.prod';
import { ComentarioFormComponent } from '../comentario-form/comentario-form.component';
ComentarioFormComponent
@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.scss']
})
export class TarjetaComentarioComponent implements OnInit {

  @Input() comentario : any ;

updateData:boolean = false ;
idUsuario = localStorage.getItem(environment.userCode);
//@Output('miEvento') actualiza : EventEmitter = new EventEmitter(); 
@Output () valueResponse: EventEmitter<string> = new EventEmitter();
constructor(
   private dialog: MatDialog,
  private comentariosService : ComentariosService
) { }


  ngOnInit(): void {
  }


  actualizarComentario() {
    const params = {
      edit: true,
      data: {
        idComentario: this.comentario.id,
        puntuacion: this.comentario.valoracion,
        comentario: this.comentario.comentario
      }
    };

    const dialogRef = this.dialog.open(ComentarioFormComponent, { data: params, panelClass: "comentario" },);
    dialogRef.afterClosed().subscribe((result: any) => {
      this.valueResponse.emit('actualiza');
    })

  }

  eliminarComentario(idComentario: number) {
    this.comentariosService.deleteComentario(idComentario).subscribe((resp: any) => {
      this.valueResponse.emit('actualiza');
    })
  }



updateDataPadre(){
 // this.actualiza.emit("true");
}


}
