import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { TimeComponent } from 'src/app/componentes/utilidades/time/time.component';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
MatFormField
@Component({
  selector: 'app-reserva-update',
  templateUrl: './reserva-update.component.html',
  styleUrls: ['./reserva-update.component.scss']
})


export class ReservaUpdateComponent implements OnInit {
  updateReservaForm !: any;
  zonaLocal: any;
  estados !: any;
  hostelero = false;
  updateEstado !: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaService: ReservasService,
    public dialogRef: MatDialogRef<TimeComponent>,
    private dialog: MatDialog
  ) {
    this.getEstados();
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {

    this.updateEstado = this.fb.group({
      estado: [this.data.data.idEstado ? this.data.data.idEstado : ""]
    })
  }

  getEstados() {
    this.reservaService.getEstados().subscribe((result: any) => {
      this.estados = result;

    })
  }

  updateReservaEstado() {

    console.log(this.data);
    const params = {
      id_reserva: this.data.data.id_reserva,
      id_estado: this.updateEstado.controls?.['estado'].value
    }


    this.reservaService.updateEstado(params).subscribe((result: any) => {
      this.dialogRef.close();
    })

  }



}
