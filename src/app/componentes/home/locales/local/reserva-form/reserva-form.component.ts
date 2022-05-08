
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';
import { TimeComponent } from 'src/app/componentes/utilidades/time/time.component';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { environment } from 'src/environments/environment.prod';


ReservasService

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

  recogedor = true;
  desabilitado = "false";
  dataReserva !: any;
  createReservaForm !: any;
  zonaLocal: Array<any> = [];
  posicionConfirmarReserba: number = 1;


  constructor(

    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaService: ReservasService,
    public dialogRef: MatDialogRef<TimeComponent>,
    private dialog: MatDialog
    //private atp : AmazingTimePickerService
  ) {
    this.getReservaInfo();
    this.createForm();
  }

  ngOnInit(): void {
  
  
  }


  getReservaInfo() {
    const params = {
      idLocal: this.data.data.id_local ? this.data.data.id_local : -1
    }

    this.reservaService.getDataCreateReserva(params).subscribe((result: any) => {

      if (result.mensage.mensageType === 1) {

        this.dataReserva = result['data'];
        this.zonaLocal = this.dataReserva.local.zonas;

        this.actualizarForm();
      }
    });



  }
  actualizarForm() {
    this.createReservaForm.controls?.['nombreUsuario'].setValue(this.dataReserva.usuario.nombre);
    this.createReservaForm.controls?.['apellidosUsuario'].setValue(this.dataReserva.usuario.apellidos);
    this.createReservaForm.controls?.['telefonoUsuario'].setValue(this.dataReserva.usuario.telefono);
    this.createReservaForm.controls?.['email'].setValue(this.dataReserva.usuario.email_user);
    this.createReservaForm.controls?.['nombreLocal'].setValue(this.dataReserva.local.nombre);
    this.createReservaForm.controls?.['direccion'].setValue(this.dataReserva.local.direccion);

    this.createReservaForm.controls?.['numPersonas'].setValue(this.data.data.num_personas_mesa ?this.data.data.num_personas_mesa : 0);
    this.createReservaForm.controls?.['zonaLocal'].setValue(this.data.data.id_zona ?this.data.data.id_zona : "");
    this.createReservaForm.controls?.['comentario'].setValue(this.data.data.comentario ?this.data.data.comentario : "" );
    this.createReservaForm.controls?.['hora'].setValue(this.data.data.hora ?this.data.data.hora : "" );
    this.createReservaForm.controls?.['fecha'].setValue(this.data.data.fecha ? new Date(this.data.data.fecha) : "" );
  }

  createForm() {

    this.createReservaForm = this.fb.group({
      nombreUsuario: ['', [Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,48}"), Validators.required]],
      apellidosUsuario: ['', [Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,48}"), Validators.required]],
      telefonoUsuario: ['', [Validators.pattern("[0-9]{9}"), Validators.required]],
      email: ['', [Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"), Validators.required]],
      nombreLocal: [''],
      direccion: [''],
      numPersonas: [1, [Validators.pattern("[0-9]{0,2}"), Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      zonaLocal: ['', [Validators.required]],
      comentario: ['']


    })

  }

  sumarPersona() {


    let index = !isNaN(this.createReservaForm.controls.numPersonas.value) ? this.createReservaForm.controls.numPersonas.value + 1 : 0;


    this.createReservaForm.controls.numPersonas.setValue(0);
    this.createReservaForm.controls.numPersonas.setValue(index);
  }

  restarPersona() {
    let index = this.createReservaForm.controls.numPersonas.value;
    index = (index - 1 === 0 || index == 0) ? 1 : (index - 1);
    this.createReservaForm.controls.numPersonas.setValue(0);
    this.createReservaForm.controls.numPersonas.setValue(index);
  }


  createReserva() {
    const params = {
      id_local: this.data.data.id_local,
      id_usuario: localStorage.getItem(environment.userCode),
      numPersonas: this.createReservaForm.controls.numPersonas.value,
      fecha: this.createReservaForm.controls.fecha.value,
      hora: this.createReservaForm.controls.hora.value,
      zonaLocal: this.createReservaForm.controls.zonaLocal.value,
      comentario: this.createReservaForm.controls.comentario.value,
    }
    this.reservaService.createReserva(params).subscribe((result: any) => {

      if (result.mensage.mensageType == 1){
        console.log(result);


        this.dialogRef.close();
      }
    })

  }



}
