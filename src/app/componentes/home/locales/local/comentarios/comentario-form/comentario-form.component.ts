import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { environment } from 'src/environments/environment.prod';
environment
ComentariosService
@Component({
  selector: 'app-comentario-form',
  templateUrl: './comentario-form.component.html',
  styleUrls: ['./comentario-form.component.scss']
})
export class ComentarioFormComponent implements OnInit {

  formularioComentario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private comnetarioServie: ComentariosService,
    public dialogRef: MatDialogRef<ComentarioFormComponent>,
  ) { }

  ngOnInit(): void {

    this.formularioComentario = this.fb.group({
      comentario: [this.data.data.comentario ? this.data.data.comentario : "" , [Validators.required]],
      puntuacion: [this.data.data.puntuacion ? this.data.data.puntuacion : 0, [Validators.required]]
    })
  }

  crearComentario() {

    const params = {
      descripcion: this.formularioComentario.controls?.['comentario'].value,
      puntuacion: this.formularioComentario.controls?.['puntuacion'].value,
      //idUsuario: 34,
      idLocal: this.data.data.idLocal,
       idUsuario: localStorage.getItem(environment.userCode),

    }
    this.comnetarioServie.createComentario(params).subscribe((resp: any) => {
      if (resp['mensage'].mensageType === 1) {
        this.dialogRef.close(true);
      }
      if (resp['mensage'].mensageType === 3) {
        alert(resp['mensage'].mensageText)
      }

    })

  }

  updateComentario() {

    const params = {
      comentario: this.formularioComentario.controls?.['comentario'].value,
      puntuacion: this.formularioComentario.controls?.['puntuacion'].value,
      id_comentario: this.data.data.idComentario,

    }

    this.comnetarioServie.updateComentario(params).subscribe((resp: any) => {
      if (resp['mensage'].mensageType === 1) {
        this.dialogRef.close(true);
      }
      if (resp['mensage'].mensageType === 3) {
        alert(resp['mensage'].mensageText)
      }

    })



  }

  puntuacion(value: number) {
    return value + " ";
  }

  enviarFormulario() {
    // enviar formulario mas adelanter
    if (!this.data.edit) {
      this.crearComentario();
    } else {
      this.updateComentario();
    }
  }
}
