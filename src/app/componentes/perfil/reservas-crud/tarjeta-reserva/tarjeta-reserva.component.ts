import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ReservaFormComponent } from 'src/app/componentes/home/locales/local/reserva-form/reserva-form.component';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ReservaUpdateComponent } from '../reserva-update/reserva-update.component';

ReservaUpdateComponent
@Component({
  selector: 'app-tarjeta-reserva',
  templateUrl: './tarjeta-reserva.component.html',
  styleUrls: ['./tarjeta-reserva.component.scss']
})
export class TarjetaReservaComponent implements OnInit {

  @Input() reserva: any;
  dialogRef !: MatDialogRef<any>;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Input() hostelero: boolean = false;

  constructor(
    private dialog: MatDialog,
    private reservaService: ReservasService,
    private usuarioService: UsuariosService

  ) { }


  ngOnInit(): void {
  }


  updateReserva() {
    const params = {
      edit: true,
      data: this.reserva
    }
    this.dialogRef = this.dialog.open(ReservaFormComponent, { data: params });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.valueResponse.emit();
    })
  }

  verReserva() {
    const params = {
      edit: true,
      data: this.reserva,
      hostelero: this.hostelero
    }
    this.dialogRef = this.dialog.open(ReservaUpdateComponent, { data: params });

    this.dialogRef.afterClosed().subscribe((result) => {
      this.valueResponse.emit();
    })
  }

  deleteReserva() {


    this.reservaService.deleteReserva(this.reserva.id_reserva).subscribe((result: any) => {
      this.valueResponse.emit('actualiza');
    })
  }
}

