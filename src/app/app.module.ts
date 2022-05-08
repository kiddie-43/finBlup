import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/estaticos/navbar/navbar.component';
import { FooterComponent } from './componentes/estaticos/footer/footer.component';
import { LogoComponent } from './componentes/estaticos/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalesComponent } from './componentes/home/locales/locales.component';
import { LoadingComponent } from './componentes/utilidades/loading/loading.component';
import { InicioComponent } from './componentes/usuario-crud/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RegistarUsuarioComponent } from './componentes/usuario-crud/registar-usuario/registar-usuario.component';
import {MatButtonModule} from '@angular/material/button';
import { LocalComponent } from './componentes/home/locales/local/local.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CarruselComponent } from './componentes/utilidades/carrusel/carrusel.component';
import { PuntuacionComponent } from './componentes/utilidades/puntuacion/puntuacion.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TabDescripcionesComponent } from './componentes/utilidades/tab-descripciones/tab-descripciones.component';
import { TabPerfilComponent } from './componentes/utilidades/tab-perfil/tab-perfil.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { LocalPerfilComponent } from './componentes/perfil/local-perfil/local-perfil.component';
import { UsuarioPerfilComponent } from './componentes/perfil/usuario-perfil/usuario-perfil.component';
import { ComentariosComponent } from './componentes/home/locales/local/comentarios/comentarios.component';
import { TarjetaComentarioComponent } from './componentes/home/locales/local/comentarios/tarjeta-comentario/tarjeta-comentario.component';
import { ComentarioFormComponent } from './componentes/home/locales/local/comentarios/comentario-form/comentario-form.component';
import { ReservaFormComponent } from './componentes/home/locales/local/reserva-form/reserva-form.component';
import { ReservasLocalComponent } from './componentes/perfil/local-perfil/reservas-local/reservas-local.component';
import { ReservasUsuarioComponent } from './componentes/perfil/usuario-perfil/reservas-usuario/reservas-usuario.component';
import { MatNativeDateModule } from '@angular/material/core';
UsuarioPerfilComponent
LocalPerfilComponent
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TimeComponent } from './componentes/utilidades/time/time.component';
import { TarjetaReservaComponent } from './componentes/perfil/reservas-crud/tarjeta-reserva/tarjeta-reserva.component';
import { ReservaUpdateComponent } from './componentes/perfil/reservas-crud/reserva-update/reserva-update.component';
ReservaUpdateComponent
//import { LocalPerfilComponent } from './componentes/local-perfil/local-perfil.component';
//import { UsuarioPerfilComponent } from './componentes/usuario-perfil/usuario-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    LocalesComponent,
    LoadingComponent,
    InicioComponent,
    RegistarUsuarioComponent,
    LocalComponent,
    CarruselComponent,
    PuntuacionComponent,
    TabDescripcionesComponent,
    TabPerfilComponent,
    PerfilComponent,
    LocalPerfilComponent,
    UsuarioPerfilComponent,
    ComentariosComponent,
    TarjetaComentarioComponent,
    ComentarioFormComponent,
    ReservaFormComponent,
    ReservasLocalComponent,
    ReservasUsuarioComponent,
    TimeComponent,
    TarjetaReservaComponent,
    ReservaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSliderModule, 
    MatDialogModule, 
    MatDividerModule,
    MatProgressSpinnerModule, 
    MatTabsModule, 
    MatIconModule, 
    MatCardModule, 
    MatStepperModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    NgxMaterialTimepickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
