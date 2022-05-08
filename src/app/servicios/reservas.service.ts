import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(
    private http: HttpClient
  ) { }


  getReservas() {
    return this.http.get(`${environment.urlServer}/reservas/getReservasUsuario.php?id_usuario=${localStorage.getItem(environment.userCode)}`).pipe(map((result: any) => { return result }))
  }

  getDataCreateReserva(params: any) {
    return this.http.get(`${environment.urlServer}/reservas/getDataCreateReserva.php?id_usuario=${localStorage.getItem(environment.userCode)}&id_local=${params.idLocal}`).pipe(map((result: any) => { return result }))
  }
  createReserva(params: any) {
    return this.http.post(`${environment.urlServer}/reservas/createReserva.php`, JSON.stringify(params)).pipe(map((result :any) =>{
      return result;
    }));
  }

  deleteReserva(id : number ){
    return this.http.get(`${environment.urlServer}/reservas/deleteReserva.php?id_reserva=${id}`).pipe(map((result)=>{return result}))
  }

  getEstados(){
    return this.http.get(`${environment.urlServer}/utilidades/getEstadosReserva.php`).pipe(map((result:any)=>{return result.data}))
  }

  updateEstado(params : any){
    return this.http.get(`${environment.urlServer}/reservas/updateEstadoReserva.php?id_reserva=${params.id_reserva}&id_estado=${params.id_estado}`).pipe(map((result:any)=>{return result.data}))
  }

  getReservasLocal(id: number){
    return this.http.get(`${environment.urlServer}/reservas/getReservasLocal.php?id_local=${id}`).pipe(map((result: any) => { return result }))

  }



}
