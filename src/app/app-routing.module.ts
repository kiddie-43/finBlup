import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LocalComponent } from './componentes/home/locales/local/local.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { InicioComponent } from './componentes/usuario-crud/inicio/inicio.component';
import { RegistarUsuarioComponent } from './componentes/usuario-crud/registar-usuario/registar-usuario.component';
PerfilComponent
LocalComponent
InicioComponent
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registar', component: RegistarUsuarioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'local/:id_local', component: LocalComponent },
  
  
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
