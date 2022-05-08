import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/servicios/loading.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { environment } from '../../../../environments/environment.prod';
UsuariosService

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent implements OnInit {
  datosUsuario: any;
  userPerfilDataForm!: FormGroup;
cargando = true;
  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    public form: FormBuilder,
    public loader : LoadingService
  ) {
    this.getDataUsuario();
    console.log(this.router.url); //  /tu-ruta



  }

  ngOnInit(): void {
    this.userPerfilDataForm = this.form.group({
      nickUser: ["", [Validators.required, Validators.pattern('[a-z A-Z]{0,40}'),]],
      nombreUser: ["", [Validators.required, Validators.pattern('[a-z A-Z]{0,40}'),]],
      telefonoUser: ["", [Validators.required, Validators.maxLength(9), Validators.pattern('[0-9]{9}'),]],
      emailUser: ["", [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],],
    });

  }

  getDataUsuario() {

    this.usuarioService.getUserData().subscribe((result: any) => {
      this.datosUsuario = result.data;
      this.updateDataForm();


    })
  }


  updateDataForm() {

    this.userPerfilDataForm.controls?.['nickUser'].setValue((this.datosUsuario.nick) ? this.datosUsuario.nick : "");
    this.userPerfilDataForm.controls?.['nombreUser'].setValue((this.datosUsuario.nombre_usuario) ? this.datosUsuario.nombre_usuario : "");
    this.userPerfilDataForm.controls?.['telefonoUser'].setValue((this.datosUsuario.telefono_user) ? this.datosUsuario.telefono_user : "");
    this.userPerfilDataForm.controls?.['emailUser'].setValue((this.datosUsuario.email_user) ? this.datosUsuario.email_user : "");

    this.cargando = false;
    // this.userPerfilDataForm = this.form.group({
    //   nickUser: [(this.datosUsuario.nombre_usuario) ? this.datosUsuario.nombre_usuario : "",],
    //   nombreUser: [(this.datosUsuario.nombre_usuario) ? this.datosUsuario.nombre_usuario : ""],
    //   telefonoUser: [(this.datosUsuario.telefono_user) ? this.datosUsuario.telefono_user : ""],
    //   emailUser: [(this.datosUsuario.email_user) ? this.datosUsuario.email_user : ""],
    // });

  }

  closeSesionUser() {
    localStorage.removeItem(environment.userCode);
    this.usuarioService.updateRegistrado( false);
    this.router.navigate(['/home']);
  }


  restaurarDataInput(formControl: string) {

    switch (formControl) {
      case 'nickUser':
        this.userPerfilDataForm.controls?.['nickUser'].setValue((this.datosUsuario.nick) ? this.datosUsuario.nick : "");
        break;
      case 'nombreUser':
        this.userPerfilDataForm.controls?.['nombreUser'].setValue((this.datosUsuario.nombre_usuario) ? this.datosUsuario.nombre_usuario : "");
        break;

      case 'telefonoUser':
        this.userPerfilDataForm.controls?.['telefonoUser'].setValue((this.datosUsuario.telefono_user) ? this.datosUsuario.telefono_user : "");
        break;
      case 'emailUser':
        this.userPerfilDataForm.controls?.['emailUser'].setValue((this.datosUsuario.email_user) ? this.datosUsuario.email_user : "");
        break;
      default:
        this.userPerfilDataForm.controls?.['nickUser'].setValue((this.datosUsuario.nick) ? this.datosUsuario.nick : "");
        this.userPerfilDataForm.controls?.['nombreUser'].setValue((this.datosUsuario.nombre_usuario) ? this.datosUsuario.nombre_usuario : "");
        this.userPerfilDataForm.controls?.['telefonoUser'].setValue((this.datosUsuario.telefono_user) ? this.datosUsuario.telefono_user : "");
        this.userPerfilDataForm.controls?.['emailUser'].setValue((this.datosUsuario.email_user) ? this.datosUsuario.email_user : "");

        break;
    }


    this.userPerfilDataForm.controls?.['nickUser'].setValue((this.datosUsuario.nick) ? this.datosUsuario.nick : "");
    this.userPerfilDataForm.controls?.['nombreUser'].setValue((this.datosUsuario.nombre_usuario) ? this.datosUsuario.nombre_usuario : "");
    this.userPerfilDataForm.controls?.['telefonoUser'].setValue((this.datosUsuario.telefono_user) ? this.datosUsuario.telefono_user : "");
    this.userPerfilDataForm.controls?.['emailUser'].setValue((this.datosUsuario.email_user) ? this.datosUsuario.email_user : "");
  }
  updateDataUser() {




    const params = {
      nickUser: this.userPerfilDataForm.controls?.['nickUser'].value,
      nombreUser: this.userPerfilDataForm.controls?.['nombreUser'].value,
      telefonoUser: this.userPerfilDataForm.controls?.['telefonoUser'].value,
      emailUser: this.userPerfilDataForm.controls?.['emailUser'].value,
      id_usuario: localStorage.getItem(environment.userCode)
    }

    this.usuarioService.updateDataUser(params).subscribe((resp: any) => {
      this.getDataUsuario();
    })

  }

}
