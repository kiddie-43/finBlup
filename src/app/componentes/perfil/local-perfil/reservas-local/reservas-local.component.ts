import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingService } from 'src/app/servicios/loading.service';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-reservas-local',
  templateUrl: './reservas-local.component.html',
  styleUrls: ['./reservas-local.component.scss']
})
export class ReservasLocalComponent implements OnInit {
  reservas: Array<any> = [];
  //@Input() id_local: number = 0;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Input() editData: any = this.setdata()
  constructor(
    private reseraService: ReservasService,
    private loader: LoadingService,
    private usuarioService: UsuariosService
  ) { }
  ngOnInit(): void {

    this.getreservas();
  }

  getreservas() {
    this.loader.loadingScreen();

    this.usuarioService.getHostelero().subscribe((result: any) => {

      this.reseraService.getReservasLocal(result.data[0].id_local).subscribe((result: any) => {
        this.reservas = result.data;
        this.loader.disabledLoading(); console.log(this.reservas)
      })
    })



  }
  recibiRespuesta($event: any) {
    this.valueResponse.emit();
    this.getreservas();
  }
  setdata(): any {
    this.getreservas();


  }
}


