import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private registrado: boolean = true;
  constructor(
    private http: HttpClient
  ) { }


  getRegistrado() {
    return this.registrado;
  }

  inicioSesion(params: any) {

    // ?email=${params.email}&pass=${params.pass}`
    return this.http.post(`${environment.urlServer}/users/getUserSesion.php`, JSON.stringify(params)).pipe(map((result: any) => {

      return result;
    }));
  }

  registrarse(params: any) {
    return this.http.post(`${environment.urlServer}/users/createUser.php`, JSON.stringify(params));
  }

  obtenerDatosUser(params: any) {
    return this.http.get(`${environment.urlServer}/users/data.php?id=${params.id}`);
  }

  estaRegistrado() {
    this.registrado = localStorage.getItem(environment.userCode) ? true : false;
  }
  getHostelero() {
    return this.http.get(`${environment.urlServer}/utilidades/getHostelero.php?id_usuario=${localStorage.getItem(environment.userCode)}`).pipe(map((result: any) => { return result; }))
  }
  getUserData() {
    return this.http.get(`${environment.urlServer}/users/getPerfilUser.php?id_usuario=${localStorage.getItem(environment.userCode)}`).pipe(map((result: any) => { return result; }))
  }


  updateDataUser(params: any) {
    return this.http.post(`${environment.urlServer}/users/updateDataUser.php`, JSON.stringify(params)).pipe(map((result: any) => {
      return result;
    }));
  }

updateRegistrado(value : boolean){
  this.registrado = value;
}

}
