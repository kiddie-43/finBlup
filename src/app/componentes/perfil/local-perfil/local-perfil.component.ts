import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/servicios/loading.service';
import { LocalesService } from 'src/app/servicios/locales.service';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { environment } from 'src/environments/environment.prod';
ReactiveFormsModule
Validators
Router
LoadingService
@Component({
  selector: 'app-local-perfil',
  templateUrl: './local-perfil.component.html',
  styleUrls: ['./local-perfil.component.scss']
})
export class LocalPerfilComponent implements OnInit {
  //datosUsuario !: any;
  localData: any;
  zonasLocal: any;
  direccion: any;

  perfilLocalForm !: FormGroup;


  constructor(
    private router: Router,
    public loader: LoadingService,
    private localService: LocalesService,
    private usuarioService: UsuariosService,
    private reservaService: ReservasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getDataLocal();
  }

  closeSesionUser() {
    localStorage.removeItem(environment.userCode);

    this.usuarioService.updateRegistrado(false);

    this.router.navigate(['/home']);
  }

  updateDataUser() {

  }
  getDataLocal() {
    this.usuarioService.getHostelero().subscribe((result: any) => {
      this.localService.getLocal(result.data[0].id_local).subscribe((result: any) => {

        this.localData = result;
       
        this.loadDataForm()
      })
      const params = {
        idLocal: result.data[0].id_local
      }

      this.reservaService.getDataCreateReserva(params).subscribe((result: any) => {

        this.zonasLocal = result.data.local.zonas;
       
      })


    })
   
  }
  createForm() {
    this.perfilLocalForm = this.fb.group({
      descripcion_local: [''],
      carta: [''],
      zonaLocal: [''],
      descripcionZona: ['']

    })

  }


  loadDataForm() {
if (this.localData){
  this.perfilLocalForm.controls?.['descripcion_local'].setValue(this.localData.descripcion.descripcion ? this.localData.descripcion.descripcion : "")
    this.perfilLocalForm.controls?.['carta'].setValue(this.localData.descripcion.carta ? this.localData.descripcion.carta : "")
}
  
  }

  updateDescripcionZona(zona : any ) {
    this.perfilLocalForm.controls?.['descripcionZona'].setValue(zona.descripcion)
  }

}
