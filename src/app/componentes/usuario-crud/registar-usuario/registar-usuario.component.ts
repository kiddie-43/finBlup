import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { environment } from 'src/environments/environment.prod';
UsuariosService
import { Md5 } from 'ts-md5';
@Component({
  selector: 'app-registar-usuario',
  templateUrl: './registar-usuario.component.html',
  styleUrls: ['./registar-usuario.component.scss']
})
export class RegistarUsuarioComponent implements OnInit {
  public registrarsuarioForm !: FormGroup;
  hide : boolean = false;
  constructor(
    private fb: FormBuilder,
    private UserService: UsuariosService,
    private router: Router

  ) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.registrarsuarioForm = this.fb.group({
      nickUser: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z A-Z]{0,40}'),
          
        ],
      ],
      nombreUser: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]{0,40}')],
      ],
      primer_apellido: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]{0,40}')],
      ],
      segundo_apellido: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]{0,40}')],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.maxLength(9),
          Validators.pattern('[0-9]{9}'),
        ],
      ],
      emailUser: [
        '',
        [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
        ],
      ],
      passUser: ['', Validators.required],
      confirmarPassUser: ['', Validators.required],
    });
  }

  add() {}


  loadForm() {
    let params = {
      nickUser: this.registrarsuarioForm.controls?.['nickUser']?.value,
      nombreUser: this.registrarsuarioForm.controls?.['nombreUser'].value,
      primer_apellido: this.registrarsuarioForm.controls?.['primer_apellido'].value,
      segundo_apellido: this.registrarsuarioForm.controls?.['segundo_apellido'].value,
      telefono: this.registrarsuarioForm.controls?.['telefono'].value,
      emailUser: this.registrarsuarioForm.controls?.['emailUser'].value,
      passUser: Md5.hashStr(this.registrarsuarioForm.controls?.['passUser'].value + 'blup'),
      confirmarPassUser: Md5.hashStr(
        this.registrarsuarioForm.get('confirmarPassUser')?.value + 'blup'
      ),
    };

    this.registrarse(params);
   
  }

  // mandar parametros al server
  registrarse(params: any) {
    return this.UserService.registrarse(params).subscribe((result: any) => {
     let temp = result;
      if (temp['id'] != '') {
      this.router.navigate(['/home']); 
       localStorage.setItem(environment.userCode, temp['id']);
        this.UserService.updateRegistrado  ( true);

        
      }

      return true;
    });
  }

  hidePass() {
    return (this.hide = !this.hide);
  }


}
