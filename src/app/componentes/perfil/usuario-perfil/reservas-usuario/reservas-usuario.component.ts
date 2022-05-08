import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/servicios/loading.service';
import { ReservasService } from 'src/app/servicios/reservas.service';
LoadingService
@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.scss']
})
export class ReservasUsuarioComponent implements OnInit {
@Input ()editData:any =  this.updatereserva();

  reservas : Array<any> = [];
  constructor(
    private reseraService : ReservasService, 
    private loader : LoadingService
  ) { }

  ngOnInit(): void {
 
    this.getreservas();
 
  }


getreservas(){
  this.loader.loadingScreen();
  this.reseraService.getReservas().subscribe((result:any)=>{
    this.reservas = result.data;
    this.loader.disabledLoading();
  })
}
recibiRespuesta($event : any){

  this.getreservas();
}
updatereserva(){
  this.getreservas();
  console.log(this.editData)
return true;
}
}
