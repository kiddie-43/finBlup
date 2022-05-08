import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
map
environment
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }


  getComentarios(id_local: number) {
    return this.http.get(`${environment.urlServer}/comentarios/getComentarios.php?id_local=${id_local}`).pipe(map((result: any) => {

      return result.data;
    }))
  }

  createComentario(params: any) {

    return this.http.post(`${environment.urlServer}/comentarios/createComentario.php`, JSON.stringify(params))
  }


  deleteComentario(idComentario: number) {
    return this.http.delete(`${environment.urlServer}/comentarios/deleteComentario.php?id_comentario=${idComentario}`)
  }

  updateComentario(params: any) {
    return this.http.post(`${environment.urlServer}/comentarios/updateComentario.php`, JSON.stringify(params)).pipe(map((result: any) => {
      return result;
    })
    )
    
  }

}
